import { Router } from "express";
import { authorize } from "../middlewares/rolesAcessControl";
import { UserRole } from "@prisma/client";
import Statistics from "../controllers/Statistics";


const statisticsRoutes = Router();

statisticsRoutes.get('/:data(\\d{4}-\\d{2}-\\d{2})', Statistics.getAllChamadosPerDay);
statisticsRoutes.get('/month/:anoMes(\\d{4}-\\d{2})',Statistics.getOrdersBymonth);
statisticsRoutes.get('/week/:anoSemana(\\d{4}-\\d{2})',Statistics.getOrderByWeek);


export default statisticsRoutes