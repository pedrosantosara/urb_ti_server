/*
  Warnings:

  - You are about to drop the column `computadorId` on the `chamado` table. All the data in the column will be lost.
  - Added the required column `tombamentoComputador` to the `chamado` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "chamado" DROP CONSTRAINT "chamado_computadorId_fkey";

-- AlterTable
ALTER TABLE "chamado" DROP COLUMN "computadorId",
ADD COLUMN     "tombamentoComputador" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "chamado" ADD CONSTRAINT "chamado_tombamentoComputador_fkey" FOREIGN KEY ("tombamentoComputador") REFERENCES "computadores"("tombamento") ON DELETE CASCADE ON UPDATE CASCADE;
