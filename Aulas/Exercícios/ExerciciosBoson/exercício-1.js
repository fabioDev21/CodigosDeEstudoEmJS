/* Função que cumprimenta uma pessoa */
function cumprimentar(nome = "nome"){
    console.log(`Olá ${nome}`)
}
cumprimentar("Fábio")

/* Função que cálcula o número de dias de vida */
function idadeDias(idade = 0){
    const valor = 365 * idade
    console.log(`A sua idade em dias é de: ${valor} dias`)
}
idadeDias(19)