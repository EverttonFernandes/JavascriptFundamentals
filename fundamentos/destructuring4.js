
function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] // inverte os valores usando o destructuring
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
console.log(rand())

/*
destructuring facilita muito em casos onde recebemos um objeto por parâmetro
 sendo assim possível extrair somente os atributos necessários para aquele determinado trecho de código*/