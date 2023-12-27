/*
const numerosReais = (valor) => {
    
    if (valor === 1){
        console.log("Crescente")
        while (valor <= 10){
            console.log(`Valor = ${valor}`)
            valor++
        } 
    } else if (valor === 10){
        console.log("Decrescente")
        while (valor >= 1){
            console.log(`Valor = ${valor}`)
            valor--
        }
    }
}
numerosReais(1)
numerosReais(10)
*/
numerosAleatorios = (min, max) => {
    rand = Math.random() * (min + max) + min
    return(rand.toFixed(2))
};

let opcao = 0
while (opcao != 0){
    opcao = numerosAleatorios(0,10)
    console.log(opcao)
}
