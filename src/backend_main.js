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

