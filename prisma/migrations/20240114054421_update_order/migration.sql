-- DropForeignKey
ALTER TABLE "chamado" DROP CONSTRAINT "chamado_tombamentoComputador_fkey";

-- AlterTable
ALTER TABLE "chamado" ALTER COLUMN "tombamentoComputador" DROP NOT NULL,
ALTER COLUMN "descricao" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "chamado" ADD CONSTRAINT "chamado_tombamentoComputador_fkey" FOREIGN KEY ("tombamentoComputador") REFERENCES "computadores"("tombamento") ON DELETE SET NULL ON UPDATE CASCADE;
