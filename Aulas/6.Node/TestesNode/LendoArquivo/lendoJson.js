const { error } = require("console")
const fs = require("fs")
const { json } = require("stream/consumers")
/* fs.readFile( (__dirname + '/dados.json'), 'utf-8', (callback) ) */
/* declarar variável = lib.função( caminho do arquivo, codificação do arquivo)*/
const arquivoJsonSincrono = fs.readFileSync((__dirname + '/dados.json'), 'utf-8')
console.log(arquivoJsonSincrono)

const caminho = __dirname + '/dados.json'
console.log(caminho)

const arquivoJsonAssincrono = fs.readFile(caminho, 'utf-8', (err, dados) => {
    const data = JSON.parse(dados)
    console.log(`Nome: ${data.nome}; Idade: ${data.idade}`)
})
arquivoJsonAssincrono