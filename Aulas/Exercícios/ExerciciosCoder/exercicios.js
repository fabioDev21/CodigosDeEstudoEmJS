/* Templates exercícios!!! 
 * console.log("Exercício x")
 * console.log("---------------------------")
 * console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-\n")
 */


console.log("Exercício 1")
console.log("---------------------------")
function calculaNumeros(a,b){
    let soma = a + b
    let subtracao = a - b
    let multiplicacao = a * b
    let divisao = (a / b).toFixed(2)
    if(isNaN(divisao)){
        divisao = "Erro!!!"
    }
    return(`Soma: ${soma}\nSubtração: ${subtracao}\nMultiplicação: ${multiplicacao}\nDivisão: ${divisao}`)
}
console.log("Chamada 1\n",calculaNumeros(3,5), "\n")
console.log("Chamada 2\n",calculaNumeros(0,0), "\n")
console.log("Chamada 3\n",calculaNumeros(19,68), "\n")
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-\n")

console.log("Exercício 2")
console.log("---------------------------")
function distingueTriangulo(chamada,a,b,c){
    if(a == b && b == c){
        console.log(`${chamada}: Triângulo equilátero`)
    } else if( a == b && b != c || a == c && c != b || c == b && c != a){
        console.log(`${chamada}: Triângulo isósceles`)
    } else if(a != b && b != c){
        console.log(`${chamada}: Triângulo escaleno`)
    }
}
distingueTriangulo("Chamada 1" ,1,1,1)
distingueTriangulo("Chamada 2" ,1,1,3)
distingueTriangulo("Chamada 3" ,1,2,1)
distingueTriangulo("Chamada 4" ,1,2,2)
distingueTriangulo("Chamada 5" ,1,2,3)
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-\n")

console.log("Exercício 3")
console.log("---------------------------")

function baseElevada(base, expoente){
    const call = "chamada"
    let valorElevado = Math.pow(base, expoente)
    return(`${call}: ${valorElevado}`)
}
console.log(baseElevada(1,1))
console.log(baseElevada(4,2))
console.log(baseElevada(6,3))
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-\n")

console.log("Exercício 4")
console.log("---------------------------")

function dividendoPeloDivisor(dividendo, divisor){
    const divisao = dividendo / divisor
    const restoDaDivisao = dividendo % divisor

    if(isNaN(divisao)){
        console.log("Erro!\n")
    } else{
        console.log(`O resultado da divisão do número ${dividendo} pelo número ${divisor} é igual a ${divisao}`)
        console.log(`O resto da divisão é ${restoDaDivisao}\n`)
    }
}
dividendoPeloDivisor(0,0)
dividendoPeloDivisor(7,2)
dividendoPeloDivisor(90,10)
dividendoPeloDivisor(95,5)
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-\n")

console.log("Exercício 5")
console.log("---------------------------")

function retornaNumeroFormatado(a,b,moeda = "R$"){
    let soma = a + b

    if(moeda == "R$" || moeda == "€"){
        soma = (soma.toFixed(2)).toString()
        return(`${moeda}: ${soma.replace(".",",")}`)
    }
    else{
        return(`${moeda}: ${soma.toFixed(2)}`)
    }
}
console.log(retornaNumeroFormatado(0.1,0.2))
console.log(retornaNumeroFormatado(0.5,0.3,"$"))
console.log(retornaNumeroFormatado(0.9,0.6,"€"))
console.log(retornaNumeroFormatado(13.9,8.65,))
console.log(retornaNumeroFormatado(86.45,13.44,"€"))
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-\n")

console.log("Exercício 6")
console.log("---------------------------")

function jurosSimples(capitalInicial, juros, tempoAplicacao){
    console.log("\nCálculo de juros simples!")

    let somaJuros = capitalInicial - juros
    let valorFinal = (somaJuros * tempoAplicacao)
    
    return((valorFinal).toLocaleString('pt-BR',{style:'currency', currency: 'BRL'}))
}
console.log(jurosSimples(1500, 0.15, 5))
console.log(jurosSimples(100, 0.15, 0.5))

function jurosCompostos(capitalInicial, juros, tempoAplicacao){
    console.log("\nCálculo de juros composto!")

    let multiplicacaoJurosComposto = juros * tempoAplicacao
    let valorFinal = (capitalInicial - multiplicacaoJurosComposto) * tempoAplicacao
    
    return((valorFinal).toLocaleString('pt-BR',{style:'currency', currency: 'BRL'}))
    
}
console.log(jurosCompostos(12000,0.35,8))
console.log(jurosCompostos(100,0.35,8))
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-\n")

console.log("Exercício 7")
console.log("---------------------------")

function calculaFormulaBhaskara(a,b,c){
    const Delta = Math.pow(b,2) - ((4 * a) * c)
    
    if(Delta < 0){
        console.log("Delta é negativo!")
    }else{
        let x1 = ((-b) + Math.sqrt(Delta)) / (2 * a)
        Number.isInteger(x1) ? x1 = x1 : x1 = x1.toFixed(1)
        let x2 = ((-b) - Math.sqrt(Delta)) / (2 * a)
        Number.isInteger(x2) ? x2 = x2 : x2 = x2.toFixed(1)
        console.log(`O delta é: ${Delta}, x1 vale: ${x1} e x2 vale: ${x2}`)
    }
}
calculaFormulaBhaskara(3,2,-8)
calculaFormulaBhaskara(9,2,-8)
calculaFormulaBhaskara(3,2,8)
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-\n")

console.log("Exercício 8")
console.log("---------------------------")

function tiraEstatistica(x){
    const pontos = (x.split(" ").map(Number))
    let c = 1
    let recordeDePontos = 0
    
    let piorPonto = Math.min(...pontos)
    piorPonto = pontos.indexOf(piorPonto)

    for(c in pontos){
        if(pontos[c] > pontos[c - 1]){  
            recordeDePontos++
        }
    }

    const estatistica = [recordeDePontos, (piorPonto + 1)]
    return(estatistica)
}


console.log(tiraEstatistica("13 18 25 25 30 38 12"))
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-\n")

console.log("Exercício 9")
console.log("---------------------------")

function notasAlunos(alunos){
    let media = alunos.filter(function(a){
        const alAprovados = []
        const alReprovados = []
        const multiplosDe5 = [45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
            if(a.nota < 40){
                if(a.nota >= 38){
                    a.nota = 40
                    a.situacao = "Arredondamento com aprovação"
                }else{
                    a.situacao = "Reprovado"
                    alReprovados.push(a.nome)
                }
            } else if(a.nota >= 40){
                if(multiplosDe5.includes(a.nota + 3)){
                    a.nota += 3 
                    a.situacao = "Aprovado com arredondamento"
                }else if(multiplosDe5.includes(a.nota + 2)){
                    a.nota += 2 
                    a.situacao = "Aprovado com arredondamento"
                }else if(multiplosDe5.includes(a.nota + 1)){
                    a.nota += 1 
                    a.situacao = "Aprovado com arredondamento"
                }else{
                    a.situacao = "Aprovado!"
                }
            }
        return(`${alAprovados},${alReprovados}`)
        })
        media.forEach(aluno => {
            console.log(`O(a) aluno(a) ${aluno.nome}, teve a nota ${aluno.nota} e a sua situação é ${aluno.situacao}`)
        });
    }
const alunos = [
    { nome: "Fábio", nota: 95},
    { nome: "Ana", nota: 100},
    { nome: "Antônio", nota: 88},
    { nome: "Valéria", nota: 77},
    { nome: "João", nota: 40},
    { nome: "Aline", nota: 38},
    { nome: "Gustavo", nota: 35},
    { nome: "Maria", nota: 28},
]
notasAlunos(alunos)

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-\n")

console.log("Exercício 10")
console.log("---------------------------")

const verificaSeEhInteiro = function(valor){
    const resultado = valor / 3
    if(Number.isInteger(resultado)){
        return(true)
    } else{
        return(false)
    }
}
console.log(verificaSeEhInteiro(3))
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-\n")

console.log("Exercício 11")
console.log("---------------------------")


// escrever uma função que realize esse cálculo, que n precise de valores predefinidos

function calculoAnoBissexto(ano){
    
    let porQuatro = ano / 4
    let porQuatrocentos = ano / 400
    
    if(Number.isInteger(porQuatro)){
        console.log(`O ano ${ano} é bissexto`)
    } else if(Number.isInteger(porQuatrocentos)){
        console.log(`O ano ${ano} bissexto`)
    } else{
        console.log(`O ano ${ano} não é bissexto!`)
    }
    
}

calculoAnoBissexto(2020)
calculoAnoBissexto(2016)
calculoAnoBissexto(2400)
calculoAnoBissexto(2000)
calculoAnoBissexto(2010)
calculoAnoBissexto(2012)
calculoAnoBissexto(4632)
calculoAnoBissexto(4631)
calculoAnoBissexto(4633)
calculoAnoBissexto(2057)
calculoAnoBissexto(4537)
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-\n")

console.log("Exercício 12")
console.log("---------------------------")

function fatorarNumeros(numero){
    
    const numeros = [numero]
    for(let i = numero - 1; i > 0; i--){
        numeros.push(i)
    }
    const fazFatorial = (a,b) => a * b
    const result = numeros.reduce(fazFatorial)
    return result
}
console.log(fatorarNumeros(1))
console.log(fatorarNumeros(2))
console.log(fatorarNumeros(3))
console.log(fatorarNumeros(4))
console.log(fatorarNumeros(5))
console.log(fatorarNumeros(6))
console.log(fatorarNumeros(7))
console.log(fatorarNumeros(8))
console.log(fatorarNumeros(9))
console.log(fatorarNumeros(10))
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-\n")

console.log("Exercício 13")
console.log("---------------------------")

function ehDiaUtil(dia){
    switch(dia){
        case "segunda" || "terça" || "quarta" || "quinta" || "sexta":
            console.log("dia útil!")    
        break;
        case "terça":
            console.log("dia útil!")
        break;
        case "quarta":
            console.log("dia útil!")
        break;
        case "quinta":
            console.log("dia útil!")
        break;
        case "sexta":
            console.log("dia útil!")
        break;
        case "sábado" :
            console.log("fim de semana")    
        break;
        case "domingo":
            console.log("fim de semana ")    
        break;
        case "feriado":
            console.log("feriado")    
        break;
        default:
            console.log("dia inválido")
    }
}
ehDiaUtil("segunda")
ehDiaUtil("domingo")
ehDiaUtil("feriado")
ehDiaUtil("sábado")
ehDiaUtil("sexta")
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-\n")

console.log("Exercício 14")
console.log("---------------------------")

function kitanda(frutaDesejada){
    switch(frutaDesejada){
        case "Maçã":
            console.log("Não vendemos essa fruta aqui")
            break;
        case "Kiwi":
            console.log("Estamos com escassez de kiwis")
            break;
        case "Melância":
            console.log("Aqui está, são 3 reais o kilo")
            break;
        default:
            console.log("Escolha uma fruta que temos em nossa kitanda")
    }
}

kitanda("Maçã")
kitanda("Kiwi")
kitanda("Melância")
kitanda("Banana")

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-\n")



/* function ordemNumero({min = 30, max = 3000}){
    const numerosAleatorios = [];
    while(numerosAleatorios.length <= 10){
        const valor = Math.random() * (max - min) + min;
        numerosAleatorios.push(Math.ceil(valor))
    }
    return numerosAleatorios.sort((a,b) => a - b).join(",");
};
console.log(ordemNumero({min: 0, max: 100})); */