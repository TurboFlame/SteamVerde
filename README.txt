El Steam del pueblo

set up
requisitos: 
-Docker
-Node
-npm

npm install @prisma/client, express, nodemon, prisma, cors
npx prisma migrate dev --name "nombre de la migracion"
Descargar dependencias
-npm install @prisma/client, express, nodemon, prisma, cors (solo la primera vez)

starting (backend)
Arrancar backend
-npm run dev
-docker compose up -d

npm run dev
docker compose up -d
despues del docker compose
1-npx prisma migrate status
2-npx prisma migrate dev --name "nombre de la ultima migracion" (solo cuando hayan cambios en las tablas o la primera vez)
