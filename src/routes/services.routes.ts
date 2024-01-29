import { Router } from "express";
import Services from "../controllers/Services";
import { authorize } from "../middlewares/rolesAcessControl";
import { UserRole } from "@prisma/client";


const servicesRoutes = Router();

servicesRoutes.post('/', authorize
    (
        [UserRole.ADMINISTRADOR, UserRole.TECNICO, UserRole.TRIAGEM]
    ), Services.criarChamado);

servicesRoutes.put('/tecnico/:idChamado', authorize([UserRole.TECNICO, UserRole.ADMINISTRADOR]), Services.vincularTecnico);// somente Tecnico e adm podem e so muda o status e a solucao
servicesRoutes.put('/:idChamado', authorize
    (
        [UserRole.ADMINISTRADOR, UserRole.TECNICO, UserRole.TRIAGEM]
    ), Services.atualizarChamado) 
servicesRoutes.get('/today',  Services.getAllChamadosPerDay);
servicesRoutes.get('/',Services.getAllChamadosFiltered);

servicesRoutes.delete('/:id',authorize([UserRole.ADMINISTRADOR]),Services.deletarChamado)

export default servicesRoutes;
