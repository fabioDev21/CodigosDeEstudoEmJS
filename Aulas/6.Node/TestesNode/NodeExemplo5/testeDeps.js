const fs = require("fs")

const dadosJson = __dirname + "/arquivo.json"

const fazOParse = (data) => {
    const arqJson = JSON.parse(data)
    return (arqJson.nome)
}
const lendoDados = fs.readFileSync(dadosJson,"utf-8")
console.log(fazOParse(lendoDados))