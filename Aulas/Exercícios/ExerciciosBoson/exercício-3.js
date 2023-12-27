const numeroMaior = (numUm, numDois) => {
    if(isNaN(numUm) || isNaN(numDois)){
        return("Isso não é um número")
    } else{
        if (numUm > numDois){
            return("O primeiro é maior!")
        } else if(numUm == numDois){
            return("Os números são iguais")
        } else if(numDois > numUm){
            return("O segundo é maior!")
        }
    }
}
console.log(numeroMaior(3,5))
console.log(numeroMaior(7,2))
console.log(numeroMaior(9,9))
console.log(numeroMaior("aa","aa"))