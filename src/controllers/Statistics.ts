import { Response, Request } from "express";
import { prisma } from "../database/client";
import { ExtendedRequest } from "../middlewares/authJWT";
import { Prisma, UserRole } from "@prisma/client";
import { startOfDay, endOfDay } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz'
import calcularDiaMaisChamados from "../service/statistics";

class Statistics {
    async getAllChamadosPerDay(req: Request, res: Response) {
        try {
            const { data } = req.params;

            const dataSelecionadaUTC = new Date(data + 'T00:00:00.000Z');
            if (isNaN(dataSelecionadaUTC.getTime())) {
                return res.status(400).json({ success: false, error: 'Formato de data inválido.' });
            }

            const inicioDoDiaUTC = new Date(
                dataSelecionadaUTC.toLocaleString()
            );
            inicioDoDiaUTC.setUTCHours(3, 0, 0, 0);

            const inicioDoDia = new Date(
                inicioDoDiaUTC.toLocaleString()
            );

            const fimDoDia = new Date(
                inicioDoDiaUTC.toLocaleString()
            );
            fimDoDia.setHours(23, 59, 59, 999);

            const chamadosDoDia = await prisma.order.findMany({
                where: {
                    criadoEm: {
                        gte: inicioDoDia,
                        lte: fimDoDia,
                    },
                },
            });

            const totalChamados = chamadosDoDia.length;
            const concluidos = chamadosDoDia.filter((chamado) => chamado.status === 3).length;
            const manutencao = chamadosDoDia.filter((chamado) => chamado.status === 2).length;

            res.json({
                success: true,
                data: {
                    totalChamados,
                    concluidos,
                    manutencao,
                },
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }

    async getOrdersBymonth(req: Request, res: Response) {
        try {
            const { anoMes } = req.params;

            const ano = anoMes.slice(0, 4);
            const mes = anoMes.slice(5, 7);

            if (isNaN(parseInt(ano)) || isNaN(parseInt(mes)) || parseInt(mes) < 1 || parseInt(mes) > 12) {
                return res.status(400).json({ success: false, error: 'Formato de ano ou mês inválido.' });
            }

            const inicioDoMesUTC = new Date(`${ano}-${mes}-01T00:00:00.000Z`);

            const timeZone = 'America/Sao_Paulo';

            const inicioDoMes = new Date(
                inicioDoMesUTC.toLocaleString('en-US', { timeZone })
            );
            inicioDoMes.setUTCHours(3, 0, 0, 0);

            const ultimoDiaDoMes = new Date(inicioDoMes);
            ultimoDiaDoMes.setUTCMonth(inicioDoMes.getUTCMonth() + 1, 0);

            const fimDoMes = new Date(
                ultimoDiaDoMes.toLocaleString('en-US', { timeZone })
            );
            fimDoMes.setHours(23, 59, 59, 999);

            const chamadosDoMes = await prisma.order.findMany({
                where: {
                    criadoEm: {
                        gte: inicioDoMes,
                        lte: fimDoMes,
                    },
                },
            });

            const totalChamados = chamadosDoMes.length;
            const concluidos = chamadosDoMes.filter((chamado) => chamado.status === 3).length;
            const manutencao = chamadosDoMes.filter((chamado) => chamado.status === 2).length;

            res.json({
                success: true,
                data: {
                    totalChamados,
                    concluidos,
                    manutencao,
                },
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }

    async getOrderByWeek(req: Request, res: Response) {
        try {
            const { anoSemana } = req.params;
        
            const [ano, semana] = anoSemana.split('-');

            console.log(ano,"semana:",semana)

            if (
              isNaN(parseInt(ano)) ||
              isNaN(parseInt(semana)) ||
              parseInt(semana) < 1 ||
              parseInt(semana) > 53
            ) {
              return res
                .status(400)
                .json({ success: false, error: 'Formato de ano ou semana inválido.' });
            }
        
            const inicioDaSemanaUTC = new Date(
              `${ano}-01-01T00:00:00.000Z`
            );
        
            inicioDaSemanaUTC.setUTCDate(
              inicioDaSemanaUTC.getUTCDate() + (parseInt(semana) - 1) * 7
            );

            const timeZone = 'America/Sao_Paulo';
        
            const inicioDaSemana = new Date(
              inicioDaSemanaUTC.toLocaleString('en-US', { timeZone })
            );
            inicioDaSemana.setUTCHours(3, 0, 0, 0);
        
            const ultimoDiaDaSemana = new Date(inicioDaSemana);
            ultimoDiaDaSemana.setUTCDate(inicioDaSemana.getUTCDate() + 6);
        
            const fimDaSemana = new Date(
              ultimoDiaDaSemana.toLocaleString('en-US', { timeZone })
            );
            fimDaSemana.setHours(23, 59, 59, 999);
        
            const chamadosDaSemana = await prisma.order.findMany({
              where: {
                criadoEm: {
                  gte: inicioDaSemana,
                  lte: fimDaSemana,
                },
              },
            });
        
            const totalChamados = chamadosDaSemana.length;
            const concluidos = chamadosDaSemana.filter(
              (chamado) => chamado.status === 3
            ).length;
            const manutencao = chamadosDaSemana.filter(
              (chamado) => chamado.status === 2
            ).length;
            const { diaComMaisChamados, totalChamadosPorDia } = calcularDiaMaisChamados(chamadosDaSemana);
        
            res.json({
              success: true,
              data: {
                totalChamados,
                concluidos,
                manutencao,
                diaComMaisChamados,
                totalChamadosPorDia: Object.fromEntries(totalChamadosPorDia), // Converter Map para objeto
              },
            });
          } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
          }
    }
}

export default new Statistics()


