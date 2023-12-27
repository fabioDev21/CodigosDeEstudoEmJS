// destruct em js

function ordemNumero({min = 30, max = 3000}){
    const numerosAleatorios = [];
    while(numerosAleatorios.length <= 10){
        const valor = Math.random() * (max - min) + min;
        numerosAleatorios.push(Math.ceil(valor))
    }
    return numerosAleatorios.sort((a,b) => a - b).join(",");
};
console.log(ordemNumero({min: 0, max: 100}));


function ordemNome(){
    const nomesABC = []
    nomesABC.push(nomes.sort((a,b) => a-b))
    return nomesABC.join(",")
}

let nomes = "Pedro,Maria,João,Joaquim,Isac,Mathias,José,Everaldo,Adalberto,Gustavo,Malaquias"
nomes = nomes.split(",")
console.log(ordemNome(nomes))

const obj = {
    nome: "Astolfo",
    idade: 18
}
for(let dado in obj){
    console.log(`${dado}: ${obj[dado]}`)
}

//teste com objeto

function Carro(marca, valor, desc){
    this.marca = marca
    this.getValorComDesc = () => {
        return valor * (1 - desc)
    }
}
const car1 = new Carro("Ferrari", 100000, 0.25)
console.log(car1.getValorComDesc(), car1.marca, car1.valor, car1.desc)

const frutas = {
    dataValidade: "01/01/2024",
    cor: "Vermelha",
    nome: "tomate"
}
Object.entries(frutas).forEach(([a,b]) => {
    console.log(`${a} - ${b}`)
})

const objetoPai = {
    nome: "Adalberto",
}

const ObjetoFilho = {
    __proto__: objetoPai,
    nome: "Jubiscleiton",
}
console.log(ObjetoFilho.__proto__)
console.log(ObjetoFilho.nome)
console.log(objetoPai.__proto__)


console.log("+_+")
const avo = {nome: "José", temCasa: true}

// se não for pra detalhar quais os atributos do objeto, só pode passar o nome do objeto pai mesmo.
const pai = Object.create(avo)
pai.nome = "José Filho"
pai.temCasa = false


// como explicado acima, tem que ter esse detalhamento
const filho = Object.create(pai, {
    nome: {
        value: "José Neto",
        writable: false,
        enumerable: true,
    }
})


console.log(Object.keys(pai))
console.log(Object.keys(filho))
console.log(filho.temCasa) 

for(let valor in filho){
    filho.hasOwnProperty(valor)?
        console.log(`é dele: ${valor}`): console.log(`Não é dele: ${valor}`)
}


console.log("+==========================================+")

//método que permite apenas a alteração dos atributos do objeto, não permite a remoção e alteração deles
const Patrocinadores = Object.seal([{nome: "Júlio", idade: 35}, {nome: "Marcos", idade: 45}, {nome: "Mitroglou", idade: 66, situacao: "Casado"}])
Patrocinadores[0].nome = "Ricardo"
Object.seal(Patrocinadores[0])
delete Patrocinadores[0].nome
Patrocinadores[0].endereco = "Rua ABC"
console.log(Patrocinadores[0].nome, "Tem endereço? -->",Patrocinadores[0].endereco, Patrocinadores[0])

//método que não permite adição, alteração e nem deletação de atributos do objeto
Object.freeze(Patrocinadores[1])
Patrocinadores[1].nome = "Gustavo"
Patrocinadores[1].idade = 46
console.log(Patrocinadores[1], Object.isFrozen(Patrocinadores[1]))

//permite alteração e remoção, mas não adição de um novo atributo
Object.preventExtensions(Patrocinadores[2])
delete Patrocinadores[2].situacao
Patrocinadores[2].nome = "Astolfo"
Patrocinadores[2].salario = 30150
console.log(Patrocinadores[2], Object.isExtensible(Patrocinadores[2]))

const times = [{
    nome: "Clube de regatas Vasco da Gama",
    fundacao: 1898,
    nacionalidade: "Brasileiro"
},{
    nome: "Bayern Munchën",
    fundacao: 1900,
    nacionalidade: "Alemão"
}]
console.log(JSON.stringify(times))

console.log(JSON.parse('[{"nome": "Nike", "fundacao": 1935},{"nome": "Puma", "fundacao": 1928 },{"nome": "Adidas","fundacao": 1924}]'))

class Cachorro {
    constructor(nome = "SemNome", idade = 0.3) {
        this.nome = nome
        this.idade = idade
    }

    falar (palavra){
        return(`${this.nome} disse: ${palavra}`)
    }

    calcularIdade(){
        const novaIdade = this.idade + 1
        return(`A nova idade de ${this.nome} é igual a ${novaIdade} anos`)
    }
}

const cachorro1 = new Cachorro("Costelinha", 2)
console.log(cachorro1.falar("Carambales!"))
console.log(cachorro1.calcularIdade())

let alunos = "Marcos,Lucas,João,Marcelo,Astolfo,Zé Carlos,Marquita,Joanita,Luana,Vera"
alunos = alunos.split(',')
console.log(alunos)
alunos.sort()
console.log(alunos)

alunos.splice(3,0, "Osias")
console.log(alunos)

delete alunos[1]
console.log(alunos)
const algunsAlunos = alunos.slice(0,3)
console.log(algunsAlunos)

const animais = ['Lontra', 'Capivara', 'Furão']
animais.pop()
console.log(animais)
animais.push('Cavalo')
console.log(animais)
animais.reverse()
console.log(animais)
animais.shift()
console.log(animais)
animais.unshift('Burro')
console.log(animais)

// array.forEach(parâmetros que recebe: elemento do array, indice do elemento e o array)

function paraCada(array){
    let novoArray = []
    for(let i = 0; i <= array.length; i++){
        novoArray.push(array[i])
    }
    novoArray.pop()
    return(novoArray)
}

let frutasAmargas = ['maçã verde', 'manga verde','laranja verde', 'Melância não madura']
console.log(paraCada(frutasAmargas))

// solução da aula foi:

Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}
const randomArray = ['Lorem', 'ipsum', 'dicsun']
randomArray.forEach2( a => console.log(a))

// exercício map - retornar apenas os atributos de preço de um objeto

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const carrinhoParse = carrinho.map(a => JSON.parse(a))
console.log(carrinhoParse) 



//implementando meu método 
Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return(newArray)
}
const carrinhoApenasPreco = carrinhoParse.map2(a => a.preco)
console.log(carrinhoApenasPreco)

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const produtosFrageis = produtos.filter(function(a){
    if(a.fragil === true){
        return(a)
    } 
})
console.log(produtosFrageis)
const produtosCaroseFrageis = produtosFrageis.filter(function(p){
    if(p.preco > 500){
        return(p)
    }
})
console.log(produtosCaroseFrageis)

const joias = [
    {nome: "Diamante", valor: 3500.00},
    {nome: "Rubi", valor: 2500.00},
    {nome: "Esmeralda", valor: 5000.00},
    {nome: " Ouro", valor: 2000.00}
]

let resultados = joias.map(a => a.valor)
console.log("Este é o Array usado", resultados)
resultados = resultados.reduce(function(vlrAcumulador, nmroAtual){
    console.log(vlrAcumulador, nmroAtual)
    return vlrAcumulador + nmroAtual
}, 0)

console.log("Este é o valor total",resultados)

const alunos2 = [
    {nome:"João", nota:7.3, bolsista:false},
    {nome:"Maria", nota:9.2, bolsista:true},
    {nome:"Pedro", nota:9.8, bolsista:false},
    {nome:"Ana", nota:8.7, bolsista:true},
]

// desafio 1: Todos os alunos são bolsistas?
// desafio 2: algum aluno é bolsista?

//transformar bolsistas em numeros
const todosBolsistas = alunos2.map(function(a){
    let acc = 0
    if(a.bolsista === true){
        acc++
    }
    return acc
}).reduce(function(acc, atual){
    if(atual === 1){
        acc += atual
    }
    return acc
}, 0) 

console.log("Todos os alunos são bolsistas?\n",todosBolsistas === alunos2.length ? "Sim, todos os alunos são bolsistas": "Não, nem todos os alunos são bolsistas")
console.log("Há alunos bolsistas?\n",todosBolsistas >= 1 ? "Sim, há alunos que são bolsistas": "Não há alunos bolsistas")

/* para o desafio:

é possível usar o reduce para fatorar um número? Testar

imperativo:
é dizer como as coisas serão feitas, é como descrever cada passo para que outra pessoa possa resolver 

declarativo:
tem maior preocupação com oque deve ser feito dentro da linguagem e onde há menos preocupação de como deve ser feito para resolver o problema, está explicitamente relacionado com o paradigma funcional */ 


// literalmente um método que calcula valores fatoriais
const numerosFatoriais = [8,7,6,5,4,3,2,1]
const fazFatorial = (a,b) => a * b // função que pode ser passada para dentro do método reduce 
const result = numerosFatoriais.reduce(fazFatorial)
console.log(result)

// concatenar um array

const verduras = ["Milho", "Batata", "Cenouras"]
const legumes = ["Cebola", "Pimentão", "Pepino"]
const frutas02 = ["Maçã", "Banana", "Tomate"]

const kitanda = []
console.log(kitanda.concat(verduras,frutas02,legumes))
const arrayTeste = [].concat(1,2,3,4,5)
console.log(arrayTeste)

/*flatmap
 Basicamente é o print dos mais de um arrays que podem estar sendo analisados em um conjunto só, isso melhora na visão do return gerado*/

const numeros02 = [4,8,10,[1,5,9]]
const fazDois = a => a * 2 
console.log(arrayTeste.flatMap(fazDois))
console.log(numeros02.flat().map(fazDois))