function estaEntre(numero, minimo, maximo, inclusivo){
    if(!!inclusivo == true){
        inclusivo = inclusivo + maximo
        if(numero > minimo && numero < inclusivo){
            return("Estou entre minimo e o número inclusivo")    
        }
    } else{
        if(numero > minimo && numero < maximo){
            return("estou entre minimo e maximo")
        } else{
            return("não estou")
        }
    }
}
console.log(estaEntre(5,1,10,15))
console.log(estaEntre(150,1,10,250))
console.log(estaEntre(3,2,6))