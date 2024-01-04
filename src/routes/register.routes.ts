import { Router } from "express";
import User from "../controllers/User";


const registerRoutes = Router();

registerRoutes.post('/', User.registerUser);

export default registerRoutes