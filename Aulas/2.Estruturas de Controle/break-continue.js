const pessoas = "josé,emanuel,ayrton,astolfo".split(",")

for (let cont in pessoas){
    if (pessoas[cont] == "emanuel"){
        break
    }
    console.log(`${cont} = ${pessoas[cont]}`)
}
console.log("Fim!")

const numeroMilhao = [1,25,67,"coringa",94,70]

console.log(`Atenção para os números do milhão!`)
for(let nums in numeroMilhao){
    if (nums == 3){
        continue
    }
    console.log(`${numeroMilhao[nums]}`)
}
console.log("Estes foram os números, boa")


const futurama = "fry,leela,bender,professor,amy,zoidberg".split(",")

console.log("Estes são alguns dos personagens de Futurama")

think: 
for(let p in futurama){
    for(let c in futurama){
        if(p == 0 && c == 2){
            break think
        }
    console.log(`Personagem A:${futurama[p]} || Personagem B: ${futurama[c]}`)
    }
}