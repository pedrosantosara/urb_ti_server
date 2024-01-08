import { Request, Response } from "express";
import { prisma } from "../database/client";
import bcrypt from "bcryptjs";
import { createToken } from "../service/JWTService";
import { encryptPassword } from "../service/encryptPassword";
import { ExtendedRequest } from "../middlewares/authJWT";

class User {


    async registerUser(req: Request, res: Response) {
        try {
            const { name, email, password, confirmPassword } = req.body;

            if (!password || !confirmPassword) {
                return res.status(400).json({ sucess: false, message: "password_or_confirmPassword_null" })
            }
            if (password.length < 6 || password.length > 12) {
                return res.status(400).json({ sucess: false, message: "password_lenght_smaller_or_bigger_then_minimum" })
            }

            if (password !== confirmPassword) {
                return res.status(400).json({ sucess: false, message: "password_different_from_confirmation" })
            }
            const hashedPassword = await encryptPassword(password);
            const user = await prisma.user.create({
                data: {
                    nome: name,
                    email,
                    senha: hashedPassword,
                    role: 'PADRAO'
                }
            });

            res.status(201).json({ success: true, message: 'user_created' });
        } catch (error) {
            console.log(error)
            return res.status(500).json({ success: false, error: 'unexpected_error' });
        }
    }

    async loginUser(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            const user = await prisma.user.findFirst({ where: { email } });
            if (!user) return res.status(400).json({ success: false, message: "email_or_password_invalid" });

            const passwordValid = await bcrypt.compare(password, user.senha);
            if (!passwordValid) return res.status(400).json({ success: false, message: "email_or_password_invalid" });

            const IJwtData = {
                userId: user.id,
                role: user.role
            };

            const token = createToken(IJwtData)

            const cookies = res.cookie('auth', token, { maxAge: 120000, path: '/', sameSite: "lax", secure: false })
            res.json({
                success: true,
                message: "user_authenticaded",
            });
        } catch (error) {
            console.log(error)
            return res.status(500).json({ success: false, error: 'unexpected_error' });
        }
    }

    async logOut(req: ExtendedRequest, res: Response) {
        try {
            if (req.cookies.auth) {
                res.clearCookie('auth');
                return res.status(200).json({ success: true, message: 'logout_ok' })
            }
        } catch (error) {
            console.log(error)
            return res.status(500).json({ success: false, error: 'unexpected_error' });
        }
    }

}

export default new User();