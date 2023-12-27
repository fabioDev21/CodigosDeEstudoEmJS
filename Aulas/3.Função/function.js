function categoriaProdutos(a){
    console.log(`Categoria ${a} escolhida`)
}
categoriaProdutos("A")
categoriaProdutos("B")
categoriaProdutos("C")

function mediaProva(a,b){
    return (a + b) / 2
}

function nulaFunção(a = 0){
    return null
}

console.log("")
console.log(nulaFunção)
let a = 7, b = 9
console.log(`A média da nota é de: ${mediaProva(a,b)}`)