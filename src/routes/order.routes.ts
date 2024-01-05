import { Router } from "express";
import Orders from "../controllers/Orders";
import { authorize } from "../middlewares/rolesAcessControl";
import { UserRole } from "@prisma/client";


const orderRoutes = Router();

orderRoutes.post('/', authorize
    (
        [UserRole.ADMINISTRADOR, UserRole.TECNICO, UserRole.TRIAGEM]
    ), Orders.criarChamado);

orderRoutes.put('/', authorize([UserRole.TECNICO, UserRole.ADMINISTRADOR]), Orders.alterarStatusChamado);// somente Tecnico e adm podem e so muda o status e a solucao
orderRoutes.put('/', authorize
    (
        [UserRole.ADMINISTRADOR, UserRole.TECNICO, UserRole.TRIAGEM]
    ), Orders.alterarOutrosCampos) // todos podem fazer alterações nessa rota mas so vai coonseguir mudar o motivo, solicitante, setor, tombamento


export default orderRoutes;
