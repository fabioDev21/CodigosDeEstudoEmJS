const mes = "janeiro,fevereiro,março,abril,maio,junho,julho,agosto,setembro,outubro,novembro,dezembro".split(",")

function imprimirMes(nome,indice){
   console.log(`${indice + 1}º mês = ${nome}`)
}

mes.forEach(imprimirMes)



