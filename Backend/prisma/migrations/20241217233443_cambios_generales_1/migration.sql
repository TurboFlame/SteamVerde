/*
  Warnings:

  - The `requisitos_minimosGama` column on the `Juego` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `carrito` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `juego_favorito` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `lista_deseados` on the `Usuario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Juego" ADD COLUMN     "imagen" TEXT NOT NULL DEFAULT 'steamverde.png',
ALTER COLUMN "empresa_desarrolladora" SET DEFAULT 'SteamVerde&Co',
DROP COLUMN "requisitos_minimosGama",
ADD COLUMN     "requisitos_minimosGama" INTEGER;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "carrito",
DROP COLUMN "juego_favorito",
DROP COLUMN "lista_deseados",
ADD COLUMN     "contrasena" TEXT NOT NULL DEFAULT 'contrasena_base',
ADD COLUMN     "genero_favorito" TEXT,
ADD COLUMN     "proxima_compra" TEXT;
