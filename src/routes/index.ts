import { Router } from "express";
import collaboratorRoutes from "./collaborator.routes";
import computerRoutes from "./computer.routes";
import { verifyLoginApp } from "../middlewares/authJWT";
import loginRoutes from "./login.routes";
import registerRoutes from "./register.routes";
import { authorizeDefaultUser } from "../middlewares/defaultUser";
import logoutRoutes from "./logout.routes";
import adminRoutes from "./admin.routes";
import statisticsRoutes from "./statistics.routes";
import servicesRoutes from "./services.routes";
import ordersRoutes from "./orders.routes";

const routes = Router();

routes.use('/statistics', statisticsRoutes);

//rotas de auth
routes.use('/register', registerRoutes);
routes.use('/login', loginRoutes);

//middlewares
routes.use(verifyLoginApp);
routes.use(authorizeDefaultUser);

//rotas core da aplicação
routes.use('/computers', computerRoutes);
routes.use('/services', servicesRoutes);

//Não usado ainda
routes.use('/logout', logoutRoutes);
routes.use('/adm', adminRoutes)
routes.use('/orders', ordersRoutes)

//rota inutil ainda
routes.use('/collaborators', collaboratorRoutes);



export default routes