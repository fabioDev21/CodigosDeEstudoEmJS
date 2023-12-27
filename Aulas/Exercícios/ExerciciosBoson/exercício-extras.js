console.log("Exercício 0.1")
// função saudação
function saudacao(){
    console.log("Bom dia Mundo!!!")
}
let pessoa = new saudacao
pessoa.saudacao

console.log("\nExercício 1")
// função cubo
function aoCubo(valor){
    cubo = Math.pow(valor, 3)
    return(`O valor é ${cubo}`)
}
let calcularCubo = aoCubo(7)
console.log(calcularCubo)

console.log("\nExercício 2")
// função transformação fahrenheigt para celsius
function fahrenheigToCelsius(temperatura){
    let calculo = (temperatura - 32) * (5 / 9)
    return(`A temperatura em Celsius é de ${calculo.toFixed(1)}ºC`)
}
let solicitarTemperatura = fahrenheigToCelsius(75.5)
console.log(solicitarTemperatura)

console.log("\nExercício 3")

// função cálculo de triângulo 
const areaDoTriangulo = (b,a) => {
    let areaCalc = b * a
    return(`A área do triângulo é equivalente a ${areaCalc}`)
}
console.log(areaDoTriangulo(5,7))

console.log("\nExercício 4")
// função cálculos de círculo = área
    function areaDoCirculo(raio) {
    areaCalc = Math.PI * Math.pow(raio, 2)
    return(`A área do círculo é igual a ${areaCalc.toFixed(1)} `)
}
let mostrarAreaDoCirculo = areaDoCirculo(15)
console.log(mostrarAreaDoCirculo)

//função cálculos de círculo = perímetro
console.log("\nExercício 5")
const perimetroDoCirculo = (raio) => {
    perimetroCalc = Math.PI * 2 * raio
    return(`O perímetro do círculo é igual a ${perimetroCalc.toFixed(1)}`)
}
let mostrarPerimetroDoCirculo = perimetroDoCirculo(10.5)
console.log(mostrarPerimetroDoCirculo)

//função contrario do número passado
console.log("\nExercício 6")
function numeroDoContra(numeroPassado){
    if(typeof numeroPassado === "number"){
        console.log("O número passado foi " + numeroPassado)
        
        let reverseNum = numeroPassado.toString()
        reverseNum = reverseNum.split("")
        console.log("Esse número invertido fica " + reverseNum.reverse().join(""))
    } else{
        console.log("Não é número!")
    }
}
let mostrarNumeroDoContra = numeroDoContra(123)
mostrarNumeroDoContra

console.log("\nExercício 7")
// função contar vogais
const contarVogais = (palavraParaContar) => {
    let contador = 0
    let vogalContada = 0 
    for(contador in palavraParaContar){
        if(palavraParaContar.charAt(contador) == "a" || "e" || "i" || "o" || "u"){
            vogalContada++
        } else if(palavraParaContar.charAt(contador) == "e"){
            vogalContada++
        } else if(palavraParaContar.charAt(contador) == "i"){
            vogalContada++
        } else if(palavraParaContar.charAt(contador) == "o"){
            vogalContada++
        } else if(palavraParaContar.charAt(contador) == "u"){
            vogalContada++
        }
    }
    console.log(`Vogais = ${vogalContada}`)
}
contarVogais("arco")

console.log("\nExercício 8")
//função que retorna um montante

function retornaMontante(ci, tdj, tdi){
    let montante = ci * ((1 + tdj)** tdi)
    return(montante.toFixed(2))
}
console.log(retornaMontante(1000,0.20,3))

console.log("\nExercício 9")
//função que calcula um fatorial

const calculaFatorial = function(valorNumerico){
    let valorCalculavel = valorNumerico - 1
    let valorArmazenado = valorCalculavel
    let contador = 1
    
    while(contador <= valorArmazenado){
        valorNumerico = valorNumerico * valorCalculavel
        valorCalculavel--
        contador++
    }
    return(valorNumerico)
}
console.log(calculaFatorial(5))
console.log(calculaFatorial(6))
console.log(calculaFatorial(10))
console.log(calculaFatorial(12))

console.log("\nExercício 10")

//função que calcula caracteres

function calcularCaracter(palavraTotal,caracterProcurado, caracterExtra){
    let palavraSeparada = palavraTotal.split("")
    let contagemDeLetras = 0
    for(let achado in palavraSeparada){
        if(palavraSeparada[achado] == caracterProcurado || caracterExtra){
            contagemDeLetras++
        }
    }
    if(palavraTotal.includes(" ")){
        return(`Na frase ${palavraTotal} o número de carácteres | ${caracterProcurado} | é de: ${contagemDeLetras} letras`)
    } else{
        return(`Na palavra ${palavraTotal} o número de carácteres | ${caracterProcurado} | é de: ${contagemDeLetras} letras`)
    }
}
console.log(calcularCaracter("paralelepipedo","e"))
console.log(calcularCaracter("o zeca pagodinho é um cantor de pagode brasileiro","a"))

/* numero primo ou não

const numeroPrimo = function(valorPrimo){
    
}
const receber = window.prompt("coloque algo") */