const a = 123
const b = 456

const obj1 = {a, b}
console.log(obj1)
Object.freeze(obj1)

const idade = "idade"
const valor = 5

const obj2 = {[idade]: valor}
console.log(obj2)

obj3 = {
    funcao(mensagem){
        return(mensagem)
    },
}
console.log(obj3.funcao("aaa"))