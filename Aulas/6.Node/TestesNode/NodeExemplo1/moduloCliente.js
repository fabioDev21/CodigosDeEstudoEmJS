const coisas1 = require("./modulo1")
console.log(coisas1.wish, "Que", coisas1.you, coisas1.were, coisas1.here )

const _ = require("lodash")
setInterval(() => console.log(_.random(1,20)), 1000)