import { Payload } from '@prisma/client/runtime/library';
import * as jwt from 'jsonwebtoken';
import { Request as ExpressRequest } from "express";

interface IJwtData {
    userId: number;
    role: string;
}

const jwtSecret = process.env.JWT_SECRET as string;
if (!jwtSecret) throw new Error('JWT_NOT_FOUND');


const createToken = (Payload: IJwtData) => {
     let teste = jwt.sign(Payload, jwtSecret, { expiresIn: '120000' });
     return teste
};

const verifyToken = async (token: string): Promise<IJwtData & { user?: any }> => {
    const decoded = jwt.verify(token, jwtSecret) as IJwtData;
    if (!decoded) throw new Error('Token invalido')

    return decoded;
};

export {
    IJwtData,
    createToken,
    verifyToken,
    jwtSecret
}