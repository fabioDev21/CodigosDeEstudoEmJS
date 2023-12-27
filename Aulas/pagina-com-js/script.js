function trocarTitulo(){
    //this.a = window.prompt("Digite abaixo")
    let contador = 0
    while(contador <= 10){
        setInterval(function att(){
            contador++
            console.log(`${contador} = `)
        }.bind(this.a),1000)
    } 
}
trocarTitulo()

/* function calcularNumero(carregarPagina){
    while(carregarPagina == 1){
        let numeroPassado = window.prompt("Digite um número abaixo")
        let verificaPrimo = 0 

        for(let contador = 1; contador <= numeroPassado; contador++){
            if(numeroPassado % contador == 0){
                verificaPrimo++
            };
            if(verificaPrimo == 2){
                window.alert("É número primo")
            
                let continuar = window.prompt("Quer testar outro número? s/n")
                if(continuar == "s"){
                    carregarPagina = 1
                } else{
                    carregarPagina = 0
                }
            }
        }
    }
}
calcularNumero(1) */