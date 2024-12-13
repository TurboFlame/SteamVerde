/*
  Warnings:

  - You are about to drop the column `fecha` on the `Juego` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Juego_desarrolladora" DROP CONSTRAINT "Juego_desarrolladora_id_desarrolladora_fkey";

-- DropForeignKey
ALTER TABLE "Juego_desarrolladora" DROP CONSTRAINT "Juego_desarrolladora_id_juego_fkey";

-- DropForeignKey
ALTER TABLE "Juegos_comprados" DROP CONSTRAINT "Juegos_comprados_id_juego_fkey";

-- DropForeignKey
ALTER TABLE "Juegos_comprados" DROP CONSTRAINT "Juegos_comprados_id_usuario_fkey";

-- AlterTable
ALTER TABLE "Juego" DROP COLUMN "fecha";

-- AddForeignKey
ALTER TABLE "Juegos_comprados" ADD CONSTRAINT "Juegos_comprados_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Juegos_comprados" ADD CONSTRAINT "Juegos_comprados_id_juego_fkey" FOREIGN KEY ("id_juego") REFERENCES "Juego"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Juego_desarrolladora" ADD CONSTRAINT "Juego_desarrolladora_id_desarrolladora_fkey" FOREIGN KEY ("id_desarrolladora") REFERENCES "Desarrolladora"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Juego_desarrolladora" ADD CONSTRAINT "Juego_desarrolladora_id_juego_fkey" FOREIGN KEY ("id_juego") REFERENCES "Juego"("id") ON DELETE CASCADE ON UPDATE CASCADE;
