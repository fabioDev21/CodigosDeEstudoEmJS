/*function thisNaoMude(){
    this.valor = 0

    setInterval(function() {
        this.valor++
        console.log(valor)
    }.bind(this), 1000)
}
thisNaoMude()*/

function thisNaoDeveMudar(){
    this.valor = 0
    setInterval(() => {
        this.valor++
        console.log(valor)
    },1000)
}
thisNaoDeveMudar()