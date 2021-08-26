function Pessoa() {
    this.idade = 0

    //const self = this // usando o self no lugar no this
    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa