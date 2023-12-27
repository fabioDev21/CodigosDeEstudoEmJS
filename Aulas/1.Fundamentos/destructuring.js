const cliente = {
    nome: "José",
    idade: 43,
    endereco: {
        rua: "Esmero bobo",
        numero: 0,
    }
}
/* acessando variáveis de dentro do objeto */
const { nome, idade } = cliente
console.log("O seu nome é:",nome,"\nE sua idade é:",idade)

/* acessando atributos dentro de um objeto presente neste objeto*/
const{ endereco: {rua, numero } } = cliente
console.log(`Você mora na rua: ${rua} no número ${numero}`)

/* Objeto inexistente dentro de cliente, provoca erro!!!
const{ conta: { agencia, poupanca, corrente } } = cliente
console.log(conta)*/

/* Possível trocar o identificador de uma variável e é possível instanciar um novo atributo já com valor */ 
const { nome: naame, idade: age, tel = 11982942517 } = cliente
console.log(naame, age, tel)

const [a] = [35]
/*  não é citável algo que não existe!!! console.log[n1, n2] */
const [n1, n2, n3, n4, n5] = [35, 36, 37, a, {}]
console.log(n1, n2, n3, n4, n5)

/* teste em funções */

function funcao({frutas, salgados}){
    console.log(frutas, salgados)
};

const cesto = {
    frutas: "Frustas",
    salgados: "coxinha"
}
funcao(cesto)

superherois = ([superman,batman]) => {
    console.log(batman, superman, batman )
}
const herois = "superman,batman,flash".split(",")
superherois(herois)

onibus = ([ passageiroUm, passageiroDois, ...rest ]) => {
    console.log(passageiroUm, passageiroDois, ...rest)
}

const passageiros = ["José", "Dilma", "Réri Póte"]
onibus(passageiros)

