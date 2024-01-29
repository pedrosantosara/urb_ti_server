/*
  Warnings:

  - You are about to drop the column `motivo` on the `chamado` table. All the data in the column will be lost.
  - Added the required column `descricao` to the `chamado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `responsavel` to the `chamado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `chamado` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TypeOrder" AS ENUM ('COMPUTADOR', 'IMPRESSORA', 'REDE', 'TELEFONIA');

-- AlterTable
ALTER TABLE "chamado" DROP COLUMN "motivo",
ADD COLUMN     "descricao" TEXT NOT NULL,
ADD COLUMN     "responsavel" TEXT NOT NULL,
ADD COLUMN     "tipo" "TypeOrder" NOT NULL;
