function criarPessoa(nome = "Nome", idade = 30, emprego = "Auxiliar"){
    obj = {
        nome: nome,
        idade: idade,
        emprego: emprego,
        funcao: function chamadaObjeto(){
            console.log(this.nome, this.idade, this.emprego)
            return " "
        }, 
    }
}
const pessoa1 = new criarPessoa("Humberto", 18, "Vendedor")
console.log(obj.funcao())

const pessoa2 = new criarPessoa("Auxiliadora", 89, "Aposentada")
console.log(obj.funcao())


