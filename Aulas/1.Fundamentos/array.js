let array = [`0`,`01`,`02`,`03`]
console.log(array[0],array[3])

delete array[0]
console.log(array)

array.push(`04`,`05`,`06`)
console.log(array)

sete = '07'
array.push(sete)
console.log(array)

array[0] = "0"
console.log(array)

array.pop()
console.log(array)

const produtos = {
    load_produtos: "carregar produtos",
    organizar: "organizar produtos em table"
}
produtos.filtro = {
    maior: "organizar tabela maior pro menor",
    menor: "organizar tabela menor pro maior"
}
produtos.categorias = {
    cor: ["Roxo","Vermelho","Verde"]
}

console.log(produtos.load_produtos)
console.log(produtos.organizar)
console.log(produtos.filtro.maior)
console.log(produtos.filtro.menor)
console.log(produtos.categorias.cor)
