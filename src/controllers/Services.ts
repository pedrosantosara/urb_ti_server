import { Request, Response } from "express";
import { io } from "../server";
import { prisma } from "../database/client";
import { Prisma } from "@prisma/client";

class Services {
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

  //
  async getAllChamadosFiltered(req: Request, res: Response) {
    try {
      const { status } = req.query;

      if(Number(status) === 3){
        res.status(400).json({ success: false, error: 'not_authorized' });
      }
      
      if (!status) {
        const chamados = await prisma.order.findMany({ 
          where: {
            status:{in:[0,1,2]}
          },
          orderBy: { status: 'asc' },
        });
        return res.status(200).json({ success: true, data: chamados })
      }

      const chamados = await prisma.order.findMany({
        where: {
          status:{in:[Number(status)]}
        },
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

      if(chamado?.status === 3){
        return res.status(400).json({ success: false, message: 'not_permission' })
      }

      if (!chamado) {
        return res.status(400).json({ success: false, message: 'chamado_not_exist' })
      }

      const chamadoDeleted = await prisma.order.delete({ where: { id: Number(id) } })
      return res.status(200).json({ success: true, message: 'deleted_order' })
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  }

  //Criar chamados
  async criarChamado(req: Request, res: Response) {
    try {
      const { tipo, solicitante, descricao, setor, tombamentoComputador } = req.body;

      let tombamentoComputadorOptional =  tombamentoComputador
  
      const camposAusentes = [];
      const tiposPermitidos = ["COMPUTADOR", "TELEFONIA", "REDE", "IMPRESSORA"];
  
      const tipoUppercase = tipo.toUpperCase();
  
      if (!tiposPermitidos.includes(tipoUppercase)) {
        return res.status(400).json({ success: false, error: 'unvalid_type' })
      }
  
      if (tipoUppercase !== "COMPUTADOR") {
        tombamentoComputadorOptional = null;
      }
  
      if (tipoUppercase === "COMPUTADOR") {
        const tombamentoComputadorExistente = await prisma.computer.findUnique({
          where: { tombamento: tombamentoComputadorOptional },
        });
        if (!tombamentoComputadorOptional) {
          return res.status(400).json({ success: false, error: 'not_found_tombamento' })
        }
  
  
        if (!tombamentoComputadorExistente) {
          return res.status(400).json({
            success: false,
            error: `not_found_tombamento: ${tombamentoComputadorOptional}`,
          });
        }
        if (!tombamentoComputadorOptional) camposAusentes.push("tombamentoComputadorOptional")
      }
  
      if (!tipoUppercase) camposAusentes.push("tipo");
      if (!solicitante) camposAusentes.push("solicitante");
      if (!setor) camposAusentes.push("setor");
  
      if (camposAusentes.length > 0) {
        return res.status(400).json({ success: false, error: `field_required: ${camposAusentes.join(", ")}.` });
      }
  
      const order = await prisma.order.create({
        data: {
          tipo: tipoUppercase,
          solicitante,
          descricao,
          setor,
          tombamentoComputador:tombamentoComputadorOptional,
        }
      });
      io.emit("ChamadoCriado", order);
      return res.status(200).json({ success: true });
    } catch(error) {
      console.log(error);
      return res.status(500).json({ success: false, error: 'unexpected_error' });
    }
  }
  
  //vincular um tecnico
  async vincularTecnico(req: Request, res: Response) {
    try {
      const { idChamado } = req.params;
      const { nomeResponsavel } = req.body;

      if(!idChamado || !nomeResponsavel){
        return res.status(400).json
        ({success:false, error:"not_found_idChamado_And_nomeResponsavel"})
      }
  

      const orderUpdated = await prisma.order.update({
        where: { id: Number(idChamado) },
        data: {
          responsavel:nomeResponsavel
        }
      })
  
      io.emit("chamadoAtualizado", { id: idChamado, status: `Tecnico Atualizado ${nomeResponsavel}` })
  
      return res.status(200).json({ success: true, message: 'order_updated' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, error: 'unexpected_error' });
    }
  
  }

  //todos podem fazer so se tiver aberto
  async atualizarChamado(req: Request, res: Response) {
    try {
      const {idChamado} = req.params
      const { tipo, solicitante, descricao,setor,solucao,status, tombamentoComputador, responsavel } = req.body;
      
      const chamado = await prisma.order.findUnique({where:{id:Number(idChamado)}})
      let tombamentoComputadorOptional =  tombamentoComputador

      if(chamado?.status === 3){
        return res.status(400).json({succcess:false, message:"order_closed"})
      }
      const tiposPermitidos = ["COMPUTADOR", "TELEFONIA", "REDE", "IMPRESSORA"];
    
      if(tipo){
        const tipoUppercase = tipo.toUpperCase();
        if (tipoUppercase !== "COMPUTADOR") {
          tombamentoComputadorOptional = null;
        }
  
        if (!tiposPermitidos.includes(tipoUppercase)) {
          return res.status(400).json({ success: false, error: 'unvalid_type' })
        }
  
        if (tipoUppercase !== "COMPUTADOR") {
          if(!tombamentoComputador){
            return res.status(400).json({success:false, message:"not_found_tombamento"})
          }
          const tombamentoComputadorExistente = await prisma.computer.findUnique({
            where: { tombamento: tombamentoComputadorOptional },
          });
          
                if (!tombamentoComputadorOptional) {
                  return res.status(400).json({ success: false, error: 'not_found_tombamento' })
                }
          
          
                if (!tombamentoComputadorExistente) {
                  return res.status(400).json({
                    success: false,
                    error: `not_found_tombamento: ${tombamentoComputadorOptional}`,
                  });
                }
              }
      }


      const orderUpdated = await prisma.order.update({
        where: { id: Number(idChamado) },
        data: {
          tipo,
          solicitante,
          descricao,
          setor,
          solucao,
          status:Number(status),
          tombamentoComputador:tombamentoComputadorOptional
        }
      });

      io.emit("chamadoAtualizado", { id: idChamado });

      return res.status(200).json({ success: true, message: 'order_updated' });

    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, error: 'unexpected_error' });
    }
  }

}

export default new Services()