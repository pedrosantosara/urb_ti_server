/*
  Warnings:

  - You are about to drop the column `criadoPor` on the `chamado` table. All the data in the column will be lost.
  - You are about to drop the column `prioridade` on the `chamado` table. All the data in the column will be lost.
  - You are about to drop the column `titulo` on the `chamado` table. All the data in the column will be lost.
  - Added the required column `nomeSolicitante` to the `chamado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `setor` to the `chamado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tombamento` to the `chamado` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "chamado" DROP CONSTRAINT "chamado_criadoPor_fkey";

-- AlterTable
ALTER TABLE "chamado" DROP COLUMN "criadoPor",
DROP COLUMN "prioridade",
DROP COLUMN "titulo",
ADD COLUMN     "nomeSolicitante" TEXT NOT NULL,
ADD COLUMN     "setor" TEXT NOT NULL,
ADD COLUMN     "tombamento" TEXT NOT NULL;
