import { Request, Response } from "express";
import { prisma } from "../database/client";
import bcrypt from "bcryptjs";
import { isValidData } from "../service/validatorRegister";
import { createToken } from "../service/JWTService";
import { encryptPassword } from "../service/encryptPassword";
import { config } from "process";

class User {


  async registerUser (req: Request, res: Response) {
    const { name, email, password, confirmPassword } = req.body;
    
    const hashedPassword = await encryptPassword(password);


    const user = await prisma.user.create({
        data: {
            nome:name,
            email,
            senha: hashedPassword,
            roles : 'PADRAO'
        }
    });

    res.status(201).json({ success: true , message:'USER_CREATED'});
}


  async loginUser(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await prisma.user.findFirst({where:{email}});
    if(!user) return res.status(400).json({success:false, message: "EMAIL_OR_PASSWORD_INVALID"});

    const passwordValid = await bcrypt.compare(password,user.senha);
    if(!passwordValid)  return res.status(400).json({success:false, message: "EMAIL_OR_PASSWORD_INVALID"});

    const IJwtData = {
        userId: user.id,
        role: user.roles
    };

    const token = createToken(IJwtData)
    
    res.cookie('auth', token, {maxAge:3600000, httpOnly: true, secure: false})
    
    res.json({
        success:true,
        message:"USER_AUTHENTICADED",
    });
}

}

export default new User();