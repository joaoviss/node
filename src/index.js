const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.send("Servidor rodando em \"http://localhost:8081/\"")
})

app.get('/json', (req, res) => {
    res.sendFile(`${__dirname}/files/games.json`)
})

app.listen(8081, () => {
    console.log("Servidor rodando em \"http:/:/localhost:8081/\"")
})
