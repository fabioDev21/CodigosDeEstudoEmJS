/* Nós temos os operadores unários, que atingem apenas um operando, eles podem ser todos aqueles que são aritméticos
ou até mesmo os operadores relacionais */
console.log("Operadores Unários!")

let a = 35; let b = 36

++a
console.log("Valor de a:",a)
b--
console.log("Valor de b:", b)
console.log("Teste 1:",a === b)
/* false! Quando citado dois operadores aritméticos como ++ ou -- é adicionado +1 para a váriavel! */

b++
console.log("Teste 2:", b === a )
/* Os dois valores são idênticos e os dois estão na classe number, por esses motivos o resultado é true! */
console.log("Operadores Binários!")
/* Agora aos operadores Binários, que são todos aqueles que precisam de dois operando para funcionar */

let c = 45; d = 45

console.log("Teste 3:", c - d) // Subtração
console.log("Teste 4:", c + d) // Adição
console.log("Teste 5:", c * d) // Multiplicação
console.log("Teste 6:", c / d) // Divisão
console.log("Teste 7:", c % d) // Módulo, que pega o resto da divisão

/* Operadores ternários, que nada mais é do que um if e else bem corrido! (Interpreto desta maneira...) */

const batataDoce = descascar => descascar >= 10 ? "Descascado!" : "Não descascado!"
// note que é possível passar um parâmetro sem ao menos colocar ele entre parentêses, porém isso é possível em apenas um parâmetro!

console.log("Teste 8: ",batataDoce(9))
console.log("Teste 9: ",batataDoce(10))


