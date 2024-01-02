module.exports = () => {
    return {
        nome: "Default",
        alterandoNomeUsuario(x) {
            this.nome = x || "Anônimo"
            return this.nome
        }
        
    }
}