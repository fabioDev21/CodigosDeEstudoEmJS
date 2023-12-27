// Podemos declarar valores padrões para as variáveis justamente para não passarmos por situações de bug no código, usamos o operador ou ( || ) para isso
function valorPadrao(a){
    a = a || "aaa"
    console.log(a)
}
valorPadrao()
valorPadrao(11)
valorPadrao("bbb")

// Em situações específicas podemos usar algo mais específico para diferenciar isso. Algo como um teste para saber com operadores ternários( if/else rápido) para testar o valor passsado.
function valorOardap(b){
    b = isNaN(b)? 1 : b
    console.log(b)
}
valorOardap("a")
valorOardap(123)
valorOardap()
valorOardap(0)

// E podemos usar da declaração convencional e padrão ES 2015
function valorPadEs(a = 0){
    console.log(a)
}
valorPadEs()
valorPadEs("123a")
valorPadEs(123)