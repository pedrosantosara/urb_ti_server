import { Router } from "express";
import { authorize } from "../middlewares/rolesAcessControl";
import { UserRole } from "@prisma/client";
import Orders from "../controllers/Orders";


const ordersRoutes = Router();

ordersRoutes.get('/', authorize
(
[UserRole.ADMINISTRADOR, UserRole.TECNICO,]
),Orders.getOrders);

export default ordersRoutes;
