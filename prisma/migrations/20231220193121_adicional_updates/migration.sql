-- AlterTable
ALTER TABLE "computadores" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "computadores_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "chamado" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "prioridade" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,
    "criadoPor" TEXT NOT NULL,
    "computadorId" INTEGER NOT NULL,

    CONSTRAINT "chamado_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "chamado" ADD CONSTRAINT "chamado_criadoPor_fkey" FOREIGN KEY ("criadoPor") REFERENCES "colaboradores"("matricula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chamado" ADD CONSTRAINT "chamado_computadorId_fkey" FOREIGN KEY ("computadorId") REFERENCES "computadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
