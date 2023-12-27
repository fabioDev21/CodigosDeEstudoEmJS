function valorInterrogacao(valor){

    if(typeof valor === "boolean"){
        return(`Valor é booleano, vou retornar o inverso! valor = ${!valor}`)
    } else if(typeof valor === "number" && valor > 0 ){
        return(`Inverso do positivo = ${valor - valor - valor}`)
    } else if(typeof valor === "number" && valor < 0 ){
        return(`Inverso do negativo = +${valor - valor - valor}`)
    }
}
console.log(valorInterrogacao(true))
console.log(valorInterrogacao(false))
console.log(valorInterrogacao(+123))
console.log(valorInterrogacao(-123))
 