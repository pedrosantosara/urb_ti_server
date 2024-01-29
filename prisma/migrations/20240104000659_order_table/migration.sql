/*
  Warnings:

  - You are about to drop the column `descricao` on the `chamado` table. All the data in the column will be lost.
  - You are about to drop the column `nomeSolicitante` on the `chamado` table. All the data in the column will be lost.
  - You are about to drop the column `tombamento` on the `chamado` table. All the data in the column will be lost.
  - The `status` column on the `chamado` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `motivo` to the `chamado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `solicitante` to the `chamado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `solucao` to the `chamado` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "chamado" DROP COLUMN "descricao",
DROP COLUMN "nomeSolicitante",
DROP COLUMN "tombamento",
ADD COLUMN     "motivo" TEXT NOT NULL,
ADD COLUMN     "solicitante" TEXT NOT NULL,
ADD COLUMN     "solucao" TEXT NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" INTEGER NOT NULL DEFAULT 0;
