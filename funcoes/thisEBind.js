const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) // recurso novo do ecmascript, poder criar funções dentro do objeto
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO - com o this mudando de contexto

const falarDePessoa = pessoa.falar.bind(pessoa) // bind é um método responsável por amarrar um determinado objeto, ou seja passa o this para a variavel a ser atribuida
falarDePessoa()