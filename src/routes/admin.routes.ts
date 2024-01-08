import { Router } from "express";
import Admin from "../controllers/Admin";
import { authorize } from "../middlewares/rolesAcessControl";
import { UserRole } from "@prisma/client";


const adminRoutes = Router();

adminRoutes.patch('/',authorize([UserRole.ADMINISTRADOR]), Admin.admManage);
adminRoutes.get('/',authorize([UserRole.ADMINISTRADOR]), Admin.getAllUsersDesc);
adminRoutes.delete('/',authorize([UserRole.ADMINISTRADOR]), Admin.deleteUser);

export default adminRoutes