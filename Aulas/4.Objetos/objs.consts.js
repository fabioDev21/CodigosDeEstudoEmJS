const cachorro = {
    nome: "Pluto",
    idade: 5,
    raça: "Labrador",
}
Object.freeze(cachorro)

console.log(cachorro.nome = "Mario")
console.log(cachorro.nome)

console.log(Object.isFrozen(cachorro))