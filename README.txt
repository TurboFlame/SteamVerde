El Steam del pueblo

requisitos: 
-Docker
-Node
-npm

Descargar dependencias para arrancar el backend por primera vex (solo la primera vez)
```
hola
```
-npm install @prisma/client
-npm install express 
-npm install nodemon
-npm install prisma
-npm install cors 

Arrancar backend
-npm run dev
-docker compose up -d

despues del docker compose
1-npx prisma migrate status
2-npx prisma migrate dev --name "nombre de la ultima migracion" (solo cuando hayan cambios en las tablas o la primera vez)
