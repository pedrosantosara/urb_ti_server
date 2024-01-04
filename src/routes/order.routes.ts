import { Router } from "express";
import Orders from "../controllers/Orders";

const orderRoutes = Router();

orderRoutes.post('/', Orders.criarChamado);
orderRoutes.patch('/', Orders.alterarStatusChamado);

export default orderRoutes;
