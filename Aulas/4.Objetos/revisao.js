function constructorFunction(nome = "Astolfo", sobrenome = "da Silva", profissao = "Vendedor"){
    const obj = {
        nome: nome,
        sobrenome: sobrenome,
        profissao: profissao,
        endereco: {
            rua: "Rua Montevidéo",
            numero: 12,
            cep: "01103-010",
        },
        moveis: [{
            cadeira: "cadeira",
            largura: "50cm",
            comprimento: "20cm",
        },{
            armario: "armario",
            largura: "1,20m",
            comprimento: "80cm",
        }],

        falar: function pessoaDiz(dizeres){
            return(`Você disse ${dizeres}`)
        },
    }
    return obj
}

const pessoaGerada = new constructorFunction("Kelly","Margarethi","Analista de Sistemas")
console.log(pessoaGerada)

pessoaGerada.idade = 25
console.log(pessoaGerada)

console.log(pessoaGerada.endereco)
pessoaGerada.endereco.rua = "Rua Montivídeo"

delete pessoaGerada.idade
console.log(pessoaGerada)

console.log(pessoaGerada)

delete pessoaGerada.endereco
delete pessoaGerada.moveis
console.log(pessoaGerada)

console.log(pessoaGerada.falar("eiro eiro"))