const funcs = []

for (let i = 0; i < 10; i++) { // o let é capaz de armazenar valores em memória, pois tem o escopo de bloco.
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()