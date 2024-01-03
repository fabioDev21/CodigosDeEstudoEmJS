const cham1 = require("./mod-1")
cham1.alteraNome("Letícia")
const cham2 = require("./mod-1")
console.log(cham2.nome)

const cham3 = require("./mod-2")()
console.log(cham3.alterandoNomeUsuario("Rosana"))
const cham4 = require("./mod-2")()
console.log(cham4.alterandoNomeUsuario())

 