import { Request, Response } from "express";
import { io } from "../server";
import { prisma } from "../database/client";
import { Prisma } from "@prisma/client";

class Orders {
  //Pegar todos chamados do dia atual
  async getAllChamadosPerDay(req: Request, res: Response) {
    try {
      const dataAtual = new Date();

      const inicioDoDia = new Date(
        dataAtual.getFullYear(),
        dataAtual.getMonth(),
        dataAtual.getDate(),
        0,
        0,
        0,
        0
      );

      const fimDoDia = new Date(
        dataAtual.getFullYear(),
        dataAtual.getMonth(),
        dataAtual.getDate(),
        23,
        59,
        59,
        999
      );

      const chamadosDoDia = await prisma.order.findMany({
        where: {
          criadoEm: {
            gte: inicioDoDia,
            lte: fimDoDia,
          },
        },
        orderBy:{
          criadoEm: 'asc'
        }
      });

      res.json({ success: true, data: chamadosDoDia });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  }

  //Pegar todos chamados e caso deseje com filtros de todos campos
  async getAllChamadosFiltered(req: Request, res: Response) {
    try {
      const { search, status } = req.query;

      if (!search && !status) {
        const chamados = await prisma.order.findMany({ 
          orderBy: { status: 'asc' },
        });
        return res.status(200).json({ success: true, data: chamados })
      }

      const whereCondition: Prisma.OrderWhereInput = {
        OR: [
          { id: Number(search) || undefined },
          { motivo: { contains: search, mode: 'insensitive' } },
          { solicitante: { contains: search, mode: 'insensitive' } },
          { setor: { contains: search, mode: 'insensitive' } },
          { solucao: { contains: search, mode: 'insensitive' } },
          { tombamentoComputador: { contains: search, mode: 'insensitive' } },
        ].filter(Boolean) as Prisma.OrderWhereInput[],
        status: { equals: Number(status) || undefined },
      };

      if (!search) {
        delete whereCondition.OR;
      }    

      const chamados = await prisma.order.findMany({
        where: whereCondition,
        orderBy: { status: 'asc' },
      });

      res.status(200).json({ success: true, data: chamados });

    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  }

  //Deletar chamado
  async deletarChamado(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const chamado = await prisma.order.findUnique({ where: { id: Number(id) } });

      if (!chamado) {
        return res.status(400).json({ success: false, message: 'chamado_not_exist' })
      }

      const chamadoDeleted = await prisma.order.delete({ where: { id: Number(id) } })
      return res.status(200).json({ succes: true, message: 'deleted_order' })
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  }

  //Criar chamados
  async criarChamado(req: Request, res: Response) {
    try {
      const { motivo, solicitante, setor, tombamentoComputador } = req.body;

      const camposAusentes = [];

      const tombamentoComputadorExistente = await prisma.computer.findUnique({
        where: { tombamento: tombamentoComputador },
      });

      if (!tombamentoComputadorExistente) {
        return res.status(400).json({
          success: false,
          error: `not_found_tombamento: ${tombamentoComputador}`,
        });
      }

      if (!motivo) camposAusentes.push("motivo");
      if (!solicitante) camposAusentes.push("solicitante");
      if (!setor) camposAusentes.push("setor");
      if (!tombamentoComputador) camposAusentes.push("tombamentoComputador");

      if (camposAusentes.length > 0) {
        return res.status(400).json({ sucess: false, error: `field_required: ${camposAusentes.join(", ")}.` });
      }

      const order = await prisma.order.create({
        data: {
          motivo,
          solicitante,
          setor,
          tombamentoComputador,
        }
      })
      io.emit("ChamadoCriado", order)
      return res.status(200).json({ sucess: true });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, error: 'unexpected_error' });
    }
  }

  //todos podem fazer
  async alterarOutrosCampos(req: Request, res: Response) {
    try {
      const { id, motivo, solicitante, setor, tombamentoComputador } = req.body;
      const camposOpcionais = ["motivo", "solicitante", "setor", "tombamentoComputador"];
      const camposAusentes = [];

      if (!id) camposAusentes.push("id");

      camposOpcionais.forEach(campo => {
        if (!(campo in req.body)) {
          camposAusentes.push(campo);
        }
      });

      if (camposAusentes.length > 0) {
        return res.status(400).json({ success: false, error: `field_required: ${camposAusentes.join(", ")}.` });
      }

      const orderUpdated = await prisma.order.update({
        where: { id: Number(id) },
        data: {
          motivo,
          solicitante,
          setor,
          tombamentoComputador
        }
      });

      io.emit("chamadoAtualizado", { id: id });

      return res.status(200).json({ success: true, message: 'order_updated' });

    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, error: 'unexpected_error' });
    }
  }

  //Tecnico pode fazer isso e adm 
  async alterarStatusChamado(req: Request, res: Response) {

    try {
      const { id, status, solucao } = req.body

      const camposAusentes = [];

      if (!id) camposAusentes.push("id");
      if (!status) camposAusentes.push("status");
      if (!solucao) camposAusentes.push("solucao");

      if (camposAusentes.length > 0) {
        return res.status(400).json({ sucess: false, error: `field_required: ${camposAusentes.join(", ")}.` });
      }

      const orderUpdated = await prisma.order.update({
        where: { id: Number(id) },
        data: {
          status: status,
          solucao: solucao
        }
      })

      io.emit("chamadoAtualizado", { id: id, status: status })

      return res.status(200).json({ success: true, message: 'order_updated' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, error: 'unexpected_error' });
    }

  }
}

export default new Orders()