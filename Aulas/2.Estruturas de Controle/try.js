function avisarErro(n){
    throw "Erro 123"
}

function pataquada({nome}){  
    try{
        return(nome)
    }   catch(n){
        avisarErro(n)
    } finally {
        console.log("Deca")
    }
}

const jbo = {
    nome: "José",
}
console.log(pataquada(jbo))