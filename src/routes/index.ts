import { Router } from "express";
import collaboratorRoutes from "./collaborator.routes";
import computerRoutes from "./computer.routes";
import orderRoutes from "./order.routes";
import { verifyLoginApp } from "../middlewares/authJWT";
import loginRoutes from "./login.routes";
import registerRoutes from "./register.routes";
import { authorizeDefaultUser } from "../middlewares/defaultUser";

const routes = Router();
//rotas de auth
routes.use('/register', registerRoutes);
routes.use('/login', loginRoutes);

//middlewares
routes.use(verifyLoginApp);
routes.use(authorizeDefaultUser);

//rotas core da aplicação
routes.use('/computers', computerRoutes);
routes.use('/orders', orderRoutes);

//Não usado ainda
routes.use('/collaborators', collaboratorRoutes);


export default routes