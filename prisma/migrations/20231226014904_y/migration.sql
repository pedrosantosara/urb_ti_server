/*
  Warnings:

  - You are about to drop the column `collaborator_matricula` on the `computadores` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nome_colaborador]` on the table `computadores` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "computadores_collaborator_matricula_key";

-- AlterTable
ALTER TABLE "computadores" DROP COLUMN "collaborator_matricula",
ADD COLUMN     "nome_colaborador" TEXT,
ALTER COLUMN "tombamento" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "computadores_nome_colaborador_key" ON "computadores"("nome_colaborador");
