import { Router } from "express";
import User from "../controllers/User";


const loginRoutes = Router();

loginRoutes.post('/', User.loginUser);
loginRoutes.post('/logout', User.logOut);

export default loginRoutes