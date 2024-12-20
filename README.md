El Steam del pueblo

requisitos: 
-Docker
-Node
-npm

Descargar dependencias para arrancar el backend por primera vex (solo la primera vez)
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


Descripcion del sitio.

Steam, version argentina con propositos no comerciales, con habilidad de crear usuarios, desarrolladora y juegos. Hay una tienda en la cual se ven todos los juegos, luego se puede ver los usuarios como lista y dentro del mismo, si se desea ver su biblioteca de juegos comprados. Se requiere hacer login con el usuario para ver sus juegos. Finalmente, hay una visualizacion de desarrollador en la cual hay mayores libertades con respecto a la vista default. 

