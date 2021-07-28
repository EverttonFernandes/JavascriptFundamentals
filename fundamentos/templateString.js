const nome = 'Everton'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

console.log(`1 + 1 = ${1+1}`)

const upperCase = mensagem => mensagem.toUpperCase()
console.log(`Olá... ${upperCase('mundo')}!`)