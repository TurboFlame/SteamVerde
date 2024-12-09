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
    const usuario = await prisma.usuario.create({
        data: {
            nombre: req.body.nombre,
            tipo_consola: req.body.tipo_consola,
            juego_favorito: req.body.juego_favorito,
            lista_deseados: undefined,
            carrito: undefined,
            dinero: parseFloat(req.body.dinero) ?? 0
        }
    })

    res.status(201).send(usuario)
})