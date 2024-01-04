import validator from 'validator';
import { prisma } from '../database/client';


interface Iuser{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

async function isValidData(body: Iuser): Promise<string[]> {
    const errors: string[] = [];

    const{name, email, password, confirmPassword} = body;

     if (!name) {
        errors.push("name_empty");
    } else {
        if (name.length < 3 || name.length > 12) {
            errors.push("O nome deve ter entre 3 e 12 caracteres.");
        }
    }

    if (!password || !confirmPassword) {
        errors.push("Campo senha ausente.");
    } else {
        if (password.length < 6 || password.length > 12) {
            errors.push("A senha deve ter entre 6 e 12 caracteres.");
        }

        if (password !== confirmPassword) {
            errors.push("A senha e a confirmação de senha não coincidem.");
        }
    }

    if (!email) {
        errors.push("Campo e-mail ausente.");
    } else {
        const isValidEmail = validator.isEmail(email);
        if (!isValidEmail) {
            errors.push("E-mail inválido.");
        }

        const userExists = await prisma.user.findFirst({ where: { email } });

        if (userExists) {
            errors.push("Já existe um usuário com esse e-mail.");
        }
    }
    return errors;
}

export {
    isValidData
}