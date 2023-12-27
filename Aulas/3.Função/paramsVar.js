// Podemos deixar para uma função não receber parâmetro algum mas de certa forma ela continuará recebendo, nesse caso passaremos diversos valores e usar a palavra reservada "arguments"

function valores(){
    let soma = "" 
    for(i in arguments){
        soma += arguments[i]
    }
    return(soma)
}
console.log(valores("a","b","c"))