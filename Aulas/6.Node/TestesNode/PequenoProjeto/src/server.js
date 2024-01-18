const express = require('express')
const app = express()
const db = require('./db.js')
const porta = 3003

/* Uso de padrão middleware */
app.get('/produtos', (req, res, next) =>{
    res.send(db.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProduto(req.params.id))
})

app.post('/produtos', (req,res,next) => {
    const produto = (db.salvarProdutos({
        nome: req.body.nome,
        valor: req.body.valor
    }))
    res.send(produto)
})

app.listen(porta, () => {console.log('fui executado')})