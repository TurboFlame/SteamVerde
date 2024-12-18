-- CreateTable
CREATE TABLE "Juego" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "tipo" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "precio" INTEGER NOT NULL,
    "empresa_desarrolladora" TEXT NOT NULL,
    "requisitos_minimosGama" TEXT NOT NULL,
    "rating" DOUBLE PRECISION,

    CONSTRAINT "Juego_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "tipo_consola" TEXT NOT NULL,
    "juego_favorito" TEXT NOT NULL,
    "lista_deseados" TEXT[],
    "carrito" TEXT[],
    "dinero" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Desarrolladora" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "cant_juegos_publicados" INTEGER NOT NULL,
    "ubicacion" TEXT NOT NULL,
    "ultimo_juego_publicado" TEXT NOT NULL,
    "rating" DOUBLE PRECISION,

    CONSTRAINT "Desarrolladora_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Juegos_comprados" (
    "id" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_juego" INTEGER NOT NULL,

    CONSTRAINT "Juegos_comprados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Juego_desarrolladora" (
    "id" SERIAL NOT NULL,
    "id_desarrolladora" INTEGER NOT NULL,
    "id_juego" INTEGER NOT NULL,

    CONSTRAINT "Juego_desarrolladora_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Juegos_comprados" ADD CONSTRAINT "Juegos_comprados_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Juegos_comprados" ADD CONSTRAINT "Juegos_comprados_id_juego_fkey" FOREIGN KEY ("id_juego") REFERENCES "Juego"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Juego_desarrolladora" ADD CONSTRAINT "Juego_desarrolladora_id_desarrolladora_fkey" FOREIGN KEY ("id_desarrolladora") REFERENCES "Desarrolladora"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Juego_desarrolladora" ADD CONSTRAINT "Juego_desarrolladora_id_juego_fkey" FOREIGN KEY ("id_juego") REFERENCES "Juego"("id") ON DELETE RESTRICT ON UPDATE CASCADE;