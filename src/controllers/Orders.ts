import { Request, Response } from "express";
import { prisma } from "../database/client";
import { io } from "../server";


class Orders {

  // async getAllChamados(req:Request, res: Response) {
  //   try { 
    
  //     const chamados = await prisma.order.findMany({where:{}});
  //     return res.status(200).json({success: true, chamados});

  //   } catch (error) {
  //     console.log(error);
  //     return res.status(500).json({ success: false, error: 'unexpected_error' });
  //   }
  // }

  
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
          tombamentoComputador
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