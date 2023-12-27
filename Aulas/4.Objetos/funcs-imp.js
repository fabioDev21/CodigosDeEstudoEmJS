// alguns métodos importantes para conseguir pegar dados de chave, valor ou os dois.

const Alunos = {
    nome: "Lucas",
    idade: 20,
    curso: "Análise e Desenvolvimento de Sistemas",
}
console.log(Object.keys(Alunos)) // retorna as chave!
console.log(Object.values(Alunos)) // retorna os valores!

let a = Object.entries(Alunos)

console.log((a) => {
    return (a[0])
}) // retorna todas as entradas em pares chave e valor!