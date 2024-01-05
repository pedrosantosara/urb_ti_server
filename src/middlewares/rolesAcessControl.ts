import { UserRole } from "@prisma/client";
import { NextFunction, Response } from "express";
import { ExtendedRequest } from "./authJWT";

const authorize = (roles: UserRole[]) => {
  return async (req: ExtendedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userRoleString: string | undefined = req.user?.role;
      const userRole: UserRole | undefined = userRoleString as UserRole;
      
      if (!userRole || !roles.includes(userRole)) {
        res.status(403).json({ success: false, error: 'Forbidden' });
      } else {
        next();
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  };
};

export {authorize}
