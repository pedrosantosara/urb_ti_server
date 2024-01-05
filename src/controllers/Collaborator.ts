import { Request, Response } from "express";
import { prisma } from "../database/client";


class Collaborators  {
  async register ( req: Request, res: Response) {
    const {name, email, registration, sector} = req.body;
    
    try {
      const collaboratorAlreadyExists = await prisma.collaborator.findUnique({ where: { matricula: registration }});
      
      if (collaboratorAlreadyExists) {
        return res.status(400).json({success: false, error: 'collaborator_already_exist'});
      }

      const collaborator = await prisma.collaborator.create({
        data: {
          nome:name,
          email,
          matricula:registration,
          setor:sector
        }
      })

      return res.status(201).json({success: true, data: collaborator});
    } catch (error) {
      console.log(error);
      return res.status(500).json({success: false, error: 'unexpected_error'});
    }
  }

  async getCollaborator (req: Request, res: Response) {
    const {registration} = req.params;

    try {
      const collaborator = await prisma.collaborator.findUnique({
        where: { matricula:registration}
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
    const { registration, name, email, sector} = req.body;
    try {
      const collaborator = await prisma.collaborator.findUnique({where: {matricula:registration}});

      if (!collaborator) return res.status(400).json({success: false, error: 'collaborator_not_exist'});

      const collaboratorUpdated = await prisma.collaborator.update({
        where: {matricula:registration},
        data: {
          nome:name,
          email,
          setor:sector
        }
      });
      return res.status(200).json({success: true, data: collaboratorUpdated})
    } catch (error) {
      return res.status(500).json({success: false, error: 'unexpected_error'});
    }
  }
}

export default new Collaborators();