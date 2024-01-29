-- DropForeignKey
ALTER TABLE "computadores" DROP CONSTRAINT "computadores_collaborator_id_fkey";

-- AlterTable
ALTER TABLE "computadores" ALTER COLUMN "collaborator_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "computadores" ADD CONSTRAINT "computadores_collaborator_id_fkey" FOREIGN KEY ("collaborator_id") REFERENCES "colaboradores"("id") ON DELETE SET NULL ON UPDATE CASCADE;
