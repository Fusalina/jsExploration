const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[0]()
funcs[2]()
funcs[8]()

//retorna o valor da posição 0 - 2 - 8

const funcs2 = []

for(let i = 0; i < 10; i++){
    funcs2.push(i)
}
console.log(funcs2[2])