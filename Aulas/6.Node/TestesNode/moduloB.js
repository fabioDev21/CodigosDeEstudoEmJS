const res = require("./moduloA")

function validaAlturaNum(res){
    if(res < 50){
        return("Esse número é menor que 50\n O valor dele é igual: " + res )
    } else{
        return("Esse número é maior que 50\n O valor dele é igual: " + res)
    }
}

module.exports.resultado = validaAlturaNum(res)