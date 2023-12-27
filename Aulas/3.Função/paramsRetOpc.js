// funções podem ter parâmetros e retornos opicionais

// observável que em um console.log o valor "undefined" se torna vísivel, pois não há um return definido
function valorAbc(a){
    console.log(a)

}
console.log(valorAbc("AAA"))

// se declaramos a função e chamarmos sem o "console.log" ele aparecerá normalmente
function valorCba(b){
    console.log(b)
}
valorCba("BBBB")

// para corrigirmos isso, podemos simplesmente declarar um return com um valor vázio ou algum valor que queremos
function valorBca(c){
    {
        console.log(c)
    }
    return("")
}
valorBca("CCC")
