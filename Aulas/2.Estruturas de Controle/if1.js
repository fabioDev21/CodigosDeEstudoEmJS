mediaCalc = ({notaUm, notaDois, notaTres}) => {
    let media = (notaUm + notaDois + notaTres) / 3

    if (media >= 7){
        return("Parabéns!")
   }
   else{
        return("Desparabéns")
   }
};

valores = {
    notaUm: 9, 
    notaDois: 7, 
    notaTres: 8,
}

console.log(mediaCalc(valores))

mediaCalc = ([notaUm, notaDois, notaTres]) => {
    let media = (notaUm + notaDois + notaTres) / 3
    
    if (media >= 7){
        return(`Parabéns, sua média é ${media.toFixed(2)}`)
   } else if (media <= 5){
        return(`Desparabéns, a sua média é ${media.toFixed(2)}`)
   } else {
        return("aaa")
   }
};

valores = "9,10,9".split(",")
valores2 = "3,3,3".split(",")

console.log(mediaCalc(valores))
console.log(mediaCalc(valores2))