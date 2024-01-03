const _ = require("lodash")


function randomNum(a,b){
    return(_.random(a,b))
}
const resultado = randomNum(1,100)
module.exports = resultado