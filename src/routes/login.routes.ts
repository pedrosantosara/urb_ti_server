import { Router } from "express";
import User from "../controllers/User";


const loginRoutes = Router();

loginRoutes.post('/', User.loginUser);

export default loginRoutes