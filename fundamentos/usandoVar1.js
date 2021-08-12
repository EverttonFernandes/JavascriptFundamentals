
{ 
    { 
        { 
            { 
                var sera = 'Será???' // em js variaveis definidas como var, podem ser visiveis fora do seu escopo (Variavel global)
                console.log(sera)
            }
        }
    }
}
    
console.log(sera)

function teste() {
    var local = 123 // porém neste caso a variavel só pode ser visível dentro da função
    console.log(local)
}

teste()
console.log(local)