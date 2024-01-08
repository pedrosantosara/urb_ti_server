import { Router } from "express";
import User from "../controllers/User";


const logoutRoutes = Router();

logoutRoutes.post('/', User.logOut);

export default logoutRoutes