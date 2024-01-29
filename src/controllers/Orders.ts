import { Request, Response } from "express";
import { io } from "../server";
import { prisma } from "../database/client";
import { Prisma } from "@prisma/client";

class Orders {
    async getOrders(req: Request, res: Response) {
        try {
          const {
            tipo,
            solicitante,
            setor,
            solucao,
            status,
            tombamentoComputador,
            responsavel
          } = req.query;

          const filters: any = {
            tipo: tipo ? { contains: tipo, mode: 'insensitive' } : undefined,
            solicitante: solicitante ? { contains: solicitante, mode: 'insensitive' } : undefined,
            setor: setor ? { contains: setor, mode: 'insensitive' } : undefined,
            solucao: solucao ? { contains: solucao, mode: 'insensitive' } : undefined,
            status,
            tombamentoComputador: tombamentoComputador ? { contains: tombamentoComputador, mode: 'insensitive' } : undefined,
            responsavel: responsavel ? { contains: responsavel, mode: 'insensitive' } : undefined
          };
      
          const cleanFilters = Object.fromEntries(
            Object.entries(filters).filter(([_, value]) => value != null)
          );
      
          const chamados = await prisma.order.findMany({
            where: cleanFilters,
            orderBy: { status: 'asc' },
          });
      
          res.status(200).json({ success: true, data: chamados });
        } catch (error) {
          console.error(error);
          res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
      }
      
    }
export default new Orders()