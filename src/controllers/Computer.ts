import { Request, Response } from "express";
import { prisma } from "../database/client";
import { Prisma } from "@prisma/client";

class Computers {
    async register(req: Request, res: Response) {
        const {
            tombamento,
            marca,
            gpu,
            sistema_operacional,
            placa_video,
            ram,
            memoria,
            tipo_hd,
            volume_hd,
            tipo,
            nome_colaborador
        } = req.body
        const where: any = {};
        try {

            const camposAusentes = [];

            if (!tombamento) camposAusentes.push("tombamento");
            if (!marca) camposAusentes.push("marca");
            if (!gpu) camposAusentes.push("gpu");
            if (!sistema_operacional) camposAusentes.push("sistema_operacional");
            if (!placa_video) camposAusentes.push("placa_video");
            if (!ram) camposAusentes.push("ram");
            if (!memoria) camposAusentes.push("memoria");
            if (!tipo_hd) camposAusentes.push("tipo_hd");
            if (!volume_hd) camposAusentes.push("volume_hd");
            if (!tipo) camposAusentes.push("tipo");

            if (camposAusentes.length > 0) {
                return res.status(400).json({sucess: false, error: `field_required: ${camposAusentes.join(", ")}.` });
            }

            const computerAlreadyExists = await prisma.computer.findUnique({ where: { tombamento } });


            if (tombamento && tombamento.length > 6) {
                return res.status(400).json({ success: false, error: "tombament_more_than_6_characters" });
            }

            if (computerAlreadyExists) {
                return res.status(400).json({ sucess: false, error: 'computer_already_exist' });
            }

            const computer = await prisma.computer.create({
                data: {
                    tombamento,
                    marca,
                    gpu,
                    sistema_operacional,
                    placa_video,
                    ram,
                    memoria,
                    tipo_hd,
                    volume_hd,
                    tipo,
                    nome_colaborador,
                }
            })

            return res.status(201).json({ success: true, data: computer });
        } catch (error) {
            console.log(error);
            return res.status(500).json({success: false, error: 'unexpected_error'});
        }
    }

    async getComputerByIdOrTombamento(req: Request, res: Response) {
        const { id, tombamento } = req.params;

        try {
            let computer;

            if (id) {
                computer = await prisma.computer.findUnique({ where: { id: Number(id) } });
            } else if (tombamento) {
                computer = await prisma.computer.findUnique({ where: { tombamento } });
            }

            if (!computer) {
                return res.status(404).json({ success: false, error: 'computer_not_found' });
            }

            return res.status(200).json({ success: true, data: computer });
        } catch (error) {
            console.log(error);
            return res.status(500).json({success: false, error: 'unexpected_error'});
        }
    }


    async getAllComputers(req: Request, res: Response) {
        const { take = 10, skip = 0, search } = req.query;
        try {   
            const totalComputers = await prisma.computer.count();
            const totalPages = Math.ceil(totalComputers/Number(take));
            const whereCondition = {
                OR: [
                    { id: Number(search) || undefined },
                    { tombamento: { contains: search, mode: 'insensitive' } },
                    { marca: { contains: search, mode: 'insensitive' } },
                    { gpu: { contains: search, mode: 'insensitive' } },
                    { sistema_operacional: { contains: search, mode: 'insensitive' } },
                    { placa_video: { contains: search, mode: 'insensitive' } },
                    { ram: { contains: search, mode: 'insensitive' } },
                    { memoria: { contains: search, mode: 'insensitive' } },
                    { tipo_hd: { contains: search, mode: 'insensitive' } },
                    { volume_hd: { contains: search, mode: 'insensitive' } },
                    { tipo: { contains: search, mode: 'insensitive' } },
                    { marca: { contains: search, mode: 'insensitive' } },
                ].filter(Boolean) as Prisma.ComputerWhereInput[],
            };
            if (search) {
                const totalSearchedCount = await prisma.computer.count({where:whereCondition})
                const computersSearched = await prisma.computer.findMany({
                    where: whereCondition,
                    take: Number(take),
                    skip: Number(skip)*10,
                });
                return res.status(200).json({ success: true, data: computersSearched, pages: Math.ceil(totalSearchedCount/Number(take))});
            }
            const allComputers = await prisma.computer.findMany({ take: Number(take), skip: Number(skip)*10 });
            return res.status(200).json({ success: true, data: allComputers, pages: totalPages });
        } catch (error) {
            return res.status(500).json({success: false, error: 'unexpected_error'});
        }
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const {
            tombamento,
            marca,
            gpu,
            sistema_operacional,
            placa_video,
            ram,
            memoria,
            tipo_hd,
            volume_hd,
            tipo,
            nome_colaborador
        } = req.body;
        try {
            const computer = await prisma.computer.findUnique({ where: { id: Number(id) } })
            if (!computer) return res.status(404).json({ success: false, error: 'computer_not_found' });

            const computerUpdate = await prisma.computer.update({
                where: { id: Number(id) },
                data: {
                    tombamento,
                    marca,
                    gpu,
                    sistema_operacional,
                    placa_video,
                    ram,
                    memoria,
                    tipo_hd,
                    volume_hd,
                    tipo,
                    nome_colaborador,
                }
            })
            return res.status(200).json({ success: true, data: computerUpdate });
        } catch (error) {
            console.log(error);
            return res.status(500).json({success: false, error: 'unexpected_error'});
        }
    }

    async deleteComputer(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const computer = await prisma.computer.findUnique({ where: { id: Number(id) } });
            if (!computer) return res.status(404).json({ success: false, error: 'computer_not_found' });

            const computerDeleted = await prisma.computer.delete({
                where: { id: Number(id) }
            });
            return res.status(200).json({ success: true, data: `computer_deleted` });
        } catch (error) {
            return res.status(500).json({success: false, error: 'unexpected_error'});
        }
    }

}

export default new Computers()