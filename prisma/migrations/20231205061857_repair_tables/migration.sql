/*
  Warnings:

  - The primary key for the `colaboradores` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `colaboradores` table. All the data in the column will be lost.
  - The primary key for the `computadores` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `collaborator_id` on the `computadores` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `computadores` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[collaborator_matricula]` on the table `computadores` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "computadores" DROP CONSTRAINT "computadores_collaborator_id_fkey";

-- DropIndex
DROP INDEX "computadores_collaborator_id_key";

-- AlterTable
ALTER TABLE "colaboradores" DROP CONSTRAINT "colaboradores_pkey",
DROP COLUMN "id";

-- AlterTable
ALTER TABLE "computadores" DROP CONSTRAINT "computadores_pkey",
DROP COLUMN "collaborator_id",
DROP COLUMN "id",
ADD COLUMN     "collaborator_matricula" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "computadores_collaborator_matricula_key" ON "computadores"("collaborator_matricula");

-- AddForeignKey
ALTER TABLE "computadores" ADD CONSTRAINT "computadores_collaborator_matricula_fkey" FOREIGN KEY ("collaborator_matricula") REFERENCES "colaboradores"("matricula") ON DELETE SET NULL ON UPDATE CASCADE;
