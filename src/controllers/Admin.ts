import { Response } from "express";
import { prisma } from "../database/client";
import { ExtendedRequest } from "../middlewares/authJWT";
import { UserRole } from "@prisma/client";

class Admin {
    // rota para admin dar cargos  "alterar os cargos" pega o id do usuario para o adm mudar o cargo dele 
    async admManage(req: ExtendedRequest, res: Response) {
        try {
            const { idUser, role } = req.body;

            const userRole: UserRole | undefined = role as UserRole;
            console.log('mostrando o usuario que o cara digitoou', userRole)
            const admUser = req.user?.role;
            console.log("mostrandoo adm", admUser);

            if (admUser !== 'ADMINISTRADOR') {
                return res.status(401).json({ success: false, message: 'you_not_is_adm' });
            }

            const user = await prisma.user.findUnique({ where: { id: Number(idUser) } });
            
            if (!user) return res.status(400).json({ success: false, error: 'user_not_exist' });
            if (!userRole || (userRole !== UserRole.TECNICO && userRole !== UserRole.TRIAGEM)) {
                return res.status(400).json({ success: false, error: 'coloque uma role valida' });
            }

            const roleUser = await prisma.user.findUnique({ where: { id: Number(idUser) } });
            if (roleUser?.role == "ADMINISTRADOR") {
                return res.status(401).json({ succes: false, error: "Voce não pode alterar o adm " })
            }

            const userRoleUpdate = await prisma.user.update({
                where: { id: Number(idUser) },
                data: {
                    role: role
                }

            })

            return res.status(200).json({ success: true, message: 'usuario atualizado' })

        } catch (error) {
            console.log(error);
            return res.status(500).json({ success: false, error: 'unexpected_error' });
        }
    }

    //rota para poder apagar pessooas do sistema 
    async deleteUser(req: ExtendedRequest, res: Response) {
        try {
            const { id } = req.body;

            const roleUser = await prisma.user.findUnique({ where: { id: Number(id) } });

            if (roleUser?.role === "ADMINISTRADOR") {
                return res.status(401).json({ success: false, error: "not_have_permission" })
            }

            const userDeleted = await prisma.user.delete({ where: { id: Number(id) } });
            return res.status(200).json({ success: true, message: 'user_deleted' })

        } catch (error) {
            console.log(error);
            return res.status(500).json({ success: false, error: 'unexpected_error' });
        }
    }

    //rota para mostrar todos os usuarios e que manda em ordem os que tem cargo de padrao por primeiro 
    async getAllUsersDesc(req: ExtendedRequest, res: Response) {
        const allUsers = await prisma.user.findMany({
            orderBy: {
                role:'asc'
            }
        })

        return res.status(200).json({success:true, data:allUsers});
    }
}
export default new Admin();

