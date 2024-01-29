/*
  Warnings:

  - You are about to drop the column `GPU` on the `computadores` table. All the data in the column will be lost.
  - You are about to drop the column `RAM` on the `computadores` table. All the data in the column will be lost.
  - Added the required column `gpu` to the `computadores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marca` to the `computadores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `memoria` to the `computadores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ram` to the `computadores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sistema_operacional` to the `computadores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `computadores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_hd` to the `computadores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `volume_hd` to the `computadores` table without a default value. This is not possible if the table is not empty.
  - Made the column `placa_video` on table `computadores` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "computadores" DROP COLUMN "GPU",
DROP COLUMN "RAM",
ADD COLUMN     "gpu" TEXT NOT NULL,
ADD COLUMN     "marca" TEXT NOT NULL,
ADD COLUMN     "memoria" TEXT NOT NULL,
ADD COLUMN     "ram" INTEGER NOT NULL,
ADD COLUMN     "sistema_operacional" TEXT NOT NULL,
ADD COLUMN     "tipo" TEXT NOT NULL,
ADD COLUMN     "tipo_hd" TEXT NOT NULL,
ADD COLUMN     "volume_hd" TEXT NOT NULL,
ALTER COLUMN "placa_video" SET NOT NULL;
