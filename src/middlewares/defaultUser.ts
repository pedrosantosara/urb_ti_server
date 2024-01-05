import { UserRole } from "@prisma/client";
import { NextFunction, Response } from "express";
import { ExtendedRequest } from "./authJWT";

const authorizeDefaultUser = async (req: ExtendedRequest, res: Response, next: NextFunction) => {
  try {
    const userRole: UserRole | undefined = req.user?.role as UserRole;

    if (!userRole || userRole === UserRole.PADRAO) {
      return res.status(403).json({ success: false, error: 'Forbidden' });
    }

    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

export {authorizeDefaultUser};
