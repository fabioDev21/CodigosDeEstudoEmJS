function salarioRecebido(horasTrabalhadas, valorHora){
    let calculoSalario = horasTrabalhadas * valorHora
    if (calculoSalario >= 1700){
        console.log(`Salário igual a R$${calculoSalario}`)
    } else{
        console.log(`Você ganha menos que um salário mínimo, o valor é de R$${calculoSalario}`)
    }
}
salarioRecebido(200, 1)
salarioRecebido(200,20.50)