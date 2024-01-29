/*
  Warnings:

  - A unique constraint covering the columns `[collaborator_id]` on the table `computadores` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `collaborator_id` to the `computadores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "computadores" ADD COLUMN     "collaborator_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "computadores_collaborator_id_key" ON "computadores"("collaborator_id");

-- AddForeignKey
ALTER TABLE "computadores" ADD CONSTRAINT "computadores_collaborator_id_fkey" FOREIGN KEY ("collaborator_id") REFERENCES "colaboradores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
