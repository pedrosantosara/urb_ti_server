-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('PADRAO', 'ADMINISTRADOR', 'TECNICO', 'TRIAGEM');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "roles" "UserRole" NOT NULL DEFAULT 'PADRAO',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
