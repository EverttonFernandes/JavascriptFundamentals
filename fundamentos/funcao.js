// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // no js é possível passar somente um parâmetro na função, porém o parametro no qual está faltando acaba se tornando undefined
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // no js é possível passar mais de um parâmetro, porém os demais acabam sendo ignorados.
imprimirSoma() // é possível também não passar parâmetros

// Funcao com retorno
function soma(a, b = 1) { // no js é possível atribuir valores na assinatura da função/método para ser usado dentro do mesmo
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())