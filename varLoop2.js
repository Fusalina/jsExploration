const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
//ambas as chamadas retornam 10, pelo fato do VAR nao respeitar escopo