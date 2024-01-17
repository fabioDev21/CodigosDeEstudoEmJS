const fs = require('fs') 


const objeto = {
    nome: 'Cadeira',
    valor: 80,
    avaliacao: 5,
}

const caminho = __dirname + '/data.json'
const arquivoGerado = fs.writeFile(caminho, JSON.stringify(objeto), erro => console.log(erro || "Arquivo salvo!"))
arquivoGerado