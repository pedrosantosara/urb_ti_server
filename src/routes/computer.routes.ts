import { Router } from "express";
import computers from "../controllers/Computer"
import { authorize } from "../middlewares/rolesAcessControl";
import { UserRole } from "@prisma/client";

const computerRoutes = Router();

computerRoutes.get('/', computers.getAllComputers);
computerRoutes.get('/:id', computers.getComputerByIdOrTombamento);
computerRoutes.post('/', authorize([UserRole.TECNICO, UserRole.ADMINISTRADOR]), computers.register);
computerRoutes.delete('/:id',authorize([UserRole.ADMINISTRADOR]), computers.deleteComputer);
computerRoutes.put('/:id',authorize([UserRole.ADMINISTRADOR,UserRole.TECNICO]), computers.update);

export default computerRoutes