import { Request, Response } from "express";
import { prisma } from "../database/client";


class Collaborators  {
  async register ( req: Request, res: Response) {
    const {nome, email, matricula, setor} = req.body;
    
    try {
      const collaboratorAlreadyExists = await prisma.collaborator.findUnique({ where: { matricula }});
      
      if (collaboratorAlreadyExists) {
        return res.status(400).json({success: false, error: 'collaborator_already_exist'});
      }

      const collaborator = await prisma.collaborator.create({
        data: {
          nome, email, matricula, setor
        }
      })

      return res.status(201).json({success: true, data: collaborator});
    } catch (error) {
      console.log(error);
      return res.status(500).json({success: false, error: 'Erro inesperado'})
    }
  }

  async getCollaborator (req: Request, res: Response) {
    const {matricula} = req.params;

    try {
      const collaborator = await prisma.collaborator.findUnique({
        where: { matricula }
      });
  
      if (!collaborator) {
        return res.status(404).json({success: false, error: 'collaborator_not_found'});
      }
  
      return res.status(200).json({success: true, data: collaborator});
      
    } catch (error) {
      console.log(error);
      return res.status(500).json({success: false, error: 'unexpected_error'});
    }
  }

  async listCollaborators (req: Request, res: Response) {
    try {
      const collaborators = await prisma.collaborator.findMany();
      return res.status(200).json({success: true, data: collaborators});
    } catch (error) {
      return res.status(500).json({success: false, error: 'unexpected_error'});
    }
  }

  async update ( req: Request, res: Response) {
    const { matricula, nome, email, setor} = req.body;
    try {
      const collaborator = await prisma.collaborator.findUnique({where: {matricula}});

      if (!collaborator) return res.status(400).json({success: false, error: 'collaborator_not_exist'});

      const collaboratorUpdated = await prisma.collaborator.update({
        where: {matricula},
        data: {
          nome, email, setor
        }
      });
      return res.status(200).json({success: true, data: collaboratorUpdated})
    } catch (error) {
      return res.status(500).json({success: false, error: 'Erro inesperado'})
    }
  }

  async delete (req: Request, res: Response) {
    const { matricula } = req.params;

    const collaboratorDeleted = await prisma.collaborator.delete({
      where: { matricula }
    });

  }

}

export default new Collaborators();