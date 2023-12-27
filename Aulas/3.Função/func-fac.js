// Uma Função factory é uma função de criação de objetos

// Função factory básica

function criaObjeto(){
    const obj = {
        nome: "Guto",
        idade: 15,
    }
    return obj
}
let obj1 = new criaObjeto
console.log(obj1)

// Função factory que recebe um parâmetro

function criaObjetoEspecial(a = "Astolfo" ,b = 60){
    const obj = {
        nome: a,
        idade: +b, // usado o símbolo de mais para transformar a string em number
    }
    for(let dados in obj){
        console.log(`${dados} = ${obj[dados]}`)
    }
    
}
let obj2 = new criaObjetoEspecial("Thiago", "16")
let obj3 = new criaObjetoEspecial("Antônio", 19)
let obj4 = new criaObjetoEspecial()