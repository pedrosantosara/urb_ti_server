import { NextFunction, Request, Response } from "express";
import { verifyToken,IJwtData } from "../service/JWTService";
import { Request as ExpressRequest } from "express";

interface ExtendedRequest extends ExpressRequest {
    user?: IJwtData & {user?:any};
}

const verifyLoginApp = async (req:ExtendedRequest, res:Response, next: NextFunction)=>{
    const authCookie = req.cookies.auth;

    if(!authCookie) return res.status(401).json('Não autorizado');

    const [token] = authCookie.split(" ");
    if(!token) return res.status(401).json('Não autorizado');

   
    try {
        const tokenUser = await verifyToken(token);
        req.user = tokenUser;

        next();
    } catch (error) {
        return res.status(401).json('Token inválido');
    }
}

export {
    verifyLoginApp,
    ExtendedRequest
}