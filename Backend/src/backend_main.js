const {PrismaClient} = require('@prisma/client')
const express = require('express')
const app = express()
const port = 3000

const prisma = new PrismaClient()

app.use(express.json())

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
