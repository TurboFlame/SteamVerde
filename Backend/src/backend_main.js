const {PrismaClient} = require('@prisma/client')
const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
const prisma = new PrismaClient()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('SteamVerde')
})

app.listen(port, () => {
    console.log(`puerto numero ${port}`)
})

app.get('/api/v1/usuarios', async (req, res) =>{
    const usuarios = await prisma.usuario.findMany()

    if(usuarios == null){
        res.sendStatus(404)
        return
    }
    
    res.json(usuarios)
})

app.get('/api/v1/juegos', async (req, res) =>{
    const juegos = await prisma.juego.findMany()

    if(juegos == null){
        res.sendStatus(404)
        return
    }
    
    res.json(juegos)
})

app.get('/api/v1/desarrolladoras', async (req, res) =>{
    const desarrolladoras = await prisma.desarrolladora.findMany()

    if(desarrolladoras == null){
        res.sendStatus(404)
        return
    }
    
    res.json(desarrolladoras)
})

app.get('/api/v1/usuarios/:id', async (req, res) =>{
    const usuario = await prisma.usuario.findUnique({
        where: {
            id: parseInt(req.params.id)
        }
    })

    if (usuario === null){
        res.sendStatus(404)
        return
    }

    res.json(usuario)
})

app.get('/api/v1/juegos/:id', async (req, res) =>{
    const juego = await prisma.juego.findUnique({
        where: {
            id: parseInt(req.params.id)
        }
    })

    if  (juego === null){
        res.sendStatus(404)
        return
    }

    res.json(juego)
})

app.get('/api/v1/desarrolladoras/:id', async (req, res) =>{
    const desarrolladora = await prisma.desarrolladora.findUnique({
        where: {
            id: parseInt(req.params.id)
        }
    })

    if (desarrolladora === null){
        res.sendStatus(404)
        return
    }

    res.json(desarrolladora)
})

app.post('/api/v1/usuarios', async (req, res) =>{
    if(!req.body.nombre){
        return res.status(400).send('El campo nombre no puede estar vacio.')
    }       

    let usuario = await prisma.usuario.findFirst({
        where: {
            nombre: req.body.nombre
        }
    })

    if (usuario != null){
        res.status(409).send("Ya existe el nombre, cambialo."); 
        return
    }
    
    usuario = await prisma.usuario.create({
        data: {
            nombre: req.body.nombre,
            tipo_consola: req.body.tipo_consola,
            contrasena: req.body.contrasena,
            genero_favorito: req.body.genero_favorito,
            proxima_compra: req.body.proxima_compra,
            dinero: parseFloat(req.body.dinero) ?? 0
        }
    })

    res.status(201).send(usuario)
})

app.post('/api/v1/juegos', async (req, res) =>{
    if(!req.body.nombre){
        return res.status(400).send('El campo nombre no puede estar vacio.')
    }

    let juego = await prisma.juego.findFirst({
        where: {
            nombre: req.body.nombre
        }
    })

    if (juego != null){
        res.status(409).send("Ya existe el nombre, cambialo."); 
        return
    }
    
    juego = await prisma.juego.create({
        data: {
            nombre: req.body.nombre,
            tipo: req.body.tipo,
            precio: parseInt(req.body.precio),
            empresa_desarrolladora: req.body.empresa_desarrolladora,
            requisitos_minimosGama: req.body.requisitos_minimosGama,
            rating: parseFloat(req.body.rating)
        }
    })

    res.status(201).send(juego)
})

app.post('/api/v1/desarrolladoras', async (req, res) =>{
    if(!req.body.nombre){
        return res.status(400).send('El campo nombre no puede estar vacio.')
    }

    let desarrolladora = await prisma.desarrolladora.findFirst({
        where: {
            nombre: req.body.nombre
        }
    })

    if (desarrolladora != null){
        res.status(409).send("Ya existe el nombre, cambialo."); 
        return
    }
    
    desarrolladora = await prisma.desarrolladora.create({
        data: {
            nombre: req.body.nombre,
            cant_juegos_publicados: parseInt(req.body.cant_juegos_publicados),
            ubicacion: req.body.ubicacion,
            ultimo_juego_publicado: req.body.ultimo_juego_publicado,
            rating: parseFloat(req.body.rating) 
        }
    })

    res.status(201).send(desarrolladora)
})

app.put('/api/v1/usuarios/:id', async (req, res) =>{
    
    let usuario = await prisma.usuario.findUnique({
        where: {
            id: parseInt(req.params.id) 
        }
    })
    
    if(usuario === null){
        res.sendStatus(404)
        return
    }

    const nombre_utilizado = await prisma.usuario.findFirst({
        where: {
            nombre: req.body.nombre,
            NOT: {
                id: usuario.id
            }
        }
    });

    if (nombre_utilizado){
        return res.status(409).send('El nombre ya está en uso');
    }

    usuario = await prisma.usuario.update({
        where: {
            id: usuario.id
        }, 
        data: {
            nombre: req.body.nombre,
            tipo_consola: req.body.tipo_consola,
            contrasena: req.body.contrasena,
            genero_favorito: req.body.genero_favorito,
            proxima_compra: req.body.proxima_compra,
            dinero: parseFloat(req.body.dinero)
        }
    })

    res.status(200).send(usuario)
})

app.put('/api/v1/juegos/:id', async (req, res) =>{

    let juego = await prisma.juego.findUnique({
        where: {
            id: parseInt(req.params.id) 
        }
    })
    
    if(juego === null){
        res.sendStatus(404)
        return
    }

    const nombre_utilizado = await prisma.juego.findFirst({
        where: {
            nombre: req.body.nombre,
            NOT: {
                id: juego.id
            }
        }
    });

    if (nombre_utilizado){
        return res.status(409).send('El nombre ya está en uso');
    }

    juego = await prisma.juego.update({
        where: {
            id: juego.id
        }, 
        data: {
            nombre: req.body.nombre,
            tipo: req.body.tipo,
            precio: req.body.precio,
            empresa_desarrolladora: req.body.empresa_desarrolladora,
            requisitos_minimosGama: req.body.requisitos_minimosGama,
            rating: req.body.rating,

        }
    })

    res.status(200).send(juego)
})

app.put('/api/v1/desarrolladoras/:id', async (req, res) =>{

    let desarrolladora = await prisma.desarrolladora.findUnique({
        where: {
            id: parseInt(req.params.id) 
        }
    })
    
    if(desarrolladora === null){
        res.sendStatus(404)
        return
    }

    const nombre_utilizado = await prisma.desarrolladora.findFirst({
        where: {
            nombre: req.body.nombre,
            NOT: {
                id: desarrolladora.id
            }
        }
    });

    if (nombre_utilizado){
        return res.status(409).send('El nombre ya está en uso');
    }

    desarrolladora = await prisma.desarrolladora.update({
        where: {
            id: desarrolladora.id
        }, 
        data: {
            nombre: req.body.nombre,
            cant_juegos_publicados: req.body.cant_juegos_publicados,
            ubicacion: req.body.ubicacion,
            ultimo_juego_publicado: req.body.ultimo_juego_publicado,
            rating: req.body.rating
        }
    })

    res.status(200).send(desarrolladora)
})

app.delete('/api/v1/usuarios/:id', async (req, res) =>{
    const usuario = await prisma.usuario.findUnique({
        where:{
            id : parseInt(req.params.id)
        }
    })

    if(usuario == null){
        res.sendStatus(404)
        return 
    }

    await prisma.usuario.delete({
        where:{
            id: parseInt(req.params.id)
        }
    })
    
    res.status(200).send(usuario)
})

app.delete('/api/v1/desarrolladoras/:id', async (req, res) =>{
    const desarrolladora = await prisma.desarrolladora.findUnique({
        where:{
            id : parseInt(req.params.id)
        }
    })

    if(desarrolladora == null){
        res.sendStatus(404)
        return 
    }

    await prisma.desarrolladora.delete({
        where:{
            id: parseInt(req.params.id)
        }
    })
    
    res.status(200).send(desarrolladora)
})

app.delete('/api/v1/juegos/:id', async (req, res) =>{
    const juego = await prisma.juego.findUnique({
        where:{
            id : parseInt(req.params.id)
        }
    })

    if(juego == null){
        res.sendStatus(404)
        return 
    }

    await prisma.juego.delete({
        where:{
            id: parseInt(req.params.id)
        }
    })
    
    res.status(200).send(juego)
})
