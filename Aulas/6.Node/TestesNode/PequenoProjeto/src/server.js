const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./db.js')
const porta = 3003

/* Uso de padrão middleware */
app.use(bodyParser.urlencoded({ extended: true }))


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

app.put('/produtos/:id', (req,res,next) => {
    const produto = (db.salvarProdutos({
        id: req.params.id,
        nome: req.body.nome,
        valor: req.body.valor
    }))
    res.send(produto)
})

app.delete('/produtos/:id', (req,res,next) => {
    const produto = (db.excluirProdutos(req.params.id ))
    res.send(produto)
})

app.listen(porta, () => {console.log('fui executado')})