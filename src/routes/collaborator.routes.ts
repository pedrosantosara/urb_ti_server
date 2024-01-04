import { Router } from "express";
import collaborators from "../controllers/Collaborator";

const collaboratorRoutes = Router();

collaboratorRoutes.post('/', collaborators.register);
collaboratorRoutes.get('/:matricula', collaborators.getCollaborator);
collaboratorRoutes.get('/', collaborators.listCollaborators);
collaboratorRoutes.put('/', collaborators.update);
collaboratorRoutes.delete('/:matricula', collaborators.delete)


export default collaboratorRoutes