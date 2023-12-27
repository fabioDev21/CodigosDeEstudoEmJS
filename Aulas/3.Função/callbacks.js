// function callback, quando é passado outra função como parâmetro p/ outra. Com a função de aguardar um evento ou ação que virá dessa outra função
const Marcas = ["Nike","Adidas", "Puma"]

function imprimirMarcas(nome, posicao){
    console.log(`A posição é ${posicao + 1}º e o nome é ${nome}`)
}

Marcas.forEach(a => a = console.log(a))
Marcas.forEach(imprimirMarcas)

const numeros = [1,27,18,9,5,3,4]
const filtraPor5 = (num) => {
    return num <= 5
}
let filtrados = numeros.filter(filtraPor5)
console.log(filtrados)