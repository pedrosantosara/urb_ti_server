import { Request, Response } from "express";
import { prisma } from "../database/client";
import { io } from "../server";


class Orders {
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
          error: `O computador com tombamento ${tombamentoComputador} não foi encontrado.`,
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
      return res.status(200).json({sucess:true});
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, error: "Internal server error" });
    }
  }


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

    const computerUpdate = await prisma.order.update({
      where: { id: Number(id) },
      data: {
        status: status,
        solucao: solucao
      }
    })

    io.emit("chamadoAtualizado", { id: id, status: status })

    return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, error: "Internal server error" });
    }
    
  }
}

export default new Orders()