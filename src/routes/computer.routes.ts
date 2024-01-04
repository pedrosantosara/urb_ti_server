import { Router } from "express";
import computers from "../controllers/Computer"

const computerRoutes = Router();

computerRoutes.get('/', computers.getAllComputers);
computerRoutes.get('/:id', computers.getComputerByIdOrTombamento);
computerRoutes.post('/', computers.register);
computerRoutes.delete('/:id', computers.deleteComputer);
computerRoutes.put('/:id', computers.update);

export default computerRoutes