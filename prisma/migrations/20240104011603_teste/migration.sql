-- DropForeignKey
ALTER TABLE "chamado" DROP CONSTRAINT "chamado_tombamentoComputador_fkey";

-- AddForeignKey
ALTER TABLE "chamado" ADD CONSTRAINT "chamado_tombamentoComputador_fkey" FOREIGN KEY ("tombamentoComputador") REFERENCES "computadores"("tombamento") ON DELETE RESTRICT ON UPDATE CASCADE;
