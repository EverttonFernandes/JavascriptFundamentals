console.log('a =', a)
var a = 2 // basicamente ele pega a variavel e entende que ela foi declarada (jogando ela para cima em tempo de execução)
console.log('a =', a)

console.log('b =', b)
let b = 2 // no caso do let ele não deixa isso acontecer
console.log('b =', b)

/* Conclusão:
Jamais declarar variaveis dessa forma, para todo caso let é melhor em casos de declaração */