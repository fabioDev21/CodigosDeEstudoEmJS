const schedule = require('node-schedule')

const tarefaAgendada1 = schedule.scheduleJob('*/5 * * * * *', function(){
    console.log("Olá mundo!", new Date().getSeconds())
})

setTimeout( function(){
    console.log("Terminando tarefa!")
    tarefaAgendada1.cancel()
}, 30000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 21
regra.second = 10

const tarefaAgendada2 = schedule.scheduleJob(regra, function(){
    console.log("Olá tarefa 2!", new Date().getSeconds())
})