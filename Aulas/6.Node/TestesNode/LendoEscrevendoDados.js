const anonimo = process.argv.indexOf("-a") !== -1
console.log(anonimo)

if(anonimo){
    process.stdout.write("Qual é a boa?")
    process.stdin.on('data', data => {
        const conteudo = data.toString().replace('\n', '')
        conteudo.split()
        if(conteudo.length > 20){
            process.stdout.write(`Eita!`)
            process.exit()
        } else{
            process.stdout.write('Ok!')
            process.exit()
        }
    })
 
}