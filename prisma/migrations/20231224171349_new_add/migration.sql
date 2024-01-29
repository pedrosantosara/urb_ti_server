-- DropForeignKey
ALTER TABLE "chamado" DROP CONSTRAINT "chamado_computadorId_fkey";

-- AlterTable
ALTER TABLE "chamado" ALTER COLUMN "descricao" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "chamado" ADD CONSTRAINT "chamado_computadorId_fkey" FOREIGN KEY ("computadorId") REFERENCES "computadores"("id") ON DELETE CASCADE ON UPDATE CASCADE;
