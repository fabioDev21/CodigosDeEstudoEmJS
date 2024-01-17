// esse exercício foi feito como solução para o desafio proposto na aula 155

const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios")

axios.get(url).then(response => {
    const funcionarios = response.data
    const paisF = []
    funcionarios.map(f => {
        if(f.pais === 'China'){
            if(f.genero === 'F'){
                if(f.salario){
                    paisF.push(f.salario)
                }
            }
        }
    })
    console.log(paisF.sort((a,b) => a-b)[0]) 
})


