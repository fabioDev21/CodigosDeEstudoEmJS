const litrosAgua = (valor) =>{
    switch(valor){
        case 100:
            console.log(`${valor}ml \nVocê bebeu pouca água..\n`)
            break
        case 500:
            console.log(`${valor}ml \nBeba mais!\n`)
            break
        case 1000:
            console.log(`${valor}ml \nVocê bebeu metade da água!\n`)
            break
        case 2000:
            console.log(`${valor}ml \nParabéns!!!\n`)
    }
}
litrosAgua(100)
litrosAgua(500)
litrosAgua(1000)
litrosAgua(2000)