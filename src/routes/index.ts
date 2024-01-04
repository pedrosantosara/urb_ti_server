import { Router } from "express";
import collaboratorRoutes from "./collaborator.routes";
import computerRoutes from "./computer.routes";
import orderRoutes from "./order.routes";
import { verifyLoginApp } from "../middlewares/authJWT";
import loginRoutes from "./login.routes";
import registerRoutes from "./register.routes";

const routes = Router();
routes.use('/orders', orderRoutes)
routes.use('/register', registerRoutes);
routes.use('/login', loginRoutes);

routes.use('/collaborators', collaboratorRoutes);
routes.use('/computers', computerRoutes)


export default routes