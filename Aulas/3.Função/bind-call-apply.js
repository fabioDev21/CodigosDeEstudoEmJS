function saudacaoClientes(){
    console.log(`Bom dia ${this.nome}`)
}

let pessoas1 = {
    nome: "Fábio",
    idade: 10,
}

let pessoas2 = {
    nome: "Ana",
}

let pessoas3 = {
    nome: "André",
}
/*
let apresentacao1 = saudacaoClientes.bind(pessoas1)
apresentacao1()
*/
let saud1 = saudacaoClientes.bind(pessoas1)/*
let saud2 = saudacaoClientes.bind(pessoas2)
let saud3 = saudacaoClientes.bind(pessoas3)
saud1()
saud2()
saud3()
// Podemos também usar call e apply para buscar o que queremos, porém ficamos impossibilitados de adicionar eles em uma variável.
*/
saudacaoClientes.call(pessoas2)
saudacaoClientes.apply(pessoas3)

//foi visto que eles chamam as funções assim que são chamados