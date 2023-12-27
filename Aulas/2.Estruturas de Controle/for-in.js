const valores = "1,2,3,4,5".split(",")

for(let c in valores){
    console.log(`${c}: ${valores[c]}`)
}

const alunoCaracterista = {
    nome: "Astolfo",
    idade: 14,
    nascimento: "21/02/2004" 
}

for(let d in alunoCaracterista){
    console.log(`${d} = ${alunoCaracterista[d]}`)
}