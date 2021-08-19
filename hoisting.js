// hoisting = içamento 
// manipulação diferenciada de js - move a declaração para o topo
// só ocorre em VAR

console.log('a = ', a)
var a = 2
console.log('a = ', a)

//tem como retorno
//undefined - e depois do içamento - 2

function teste() {
    console.log('a = ', a)
    var a = 2
    console.log('a = ', a)
}

teste()
console.log('a = ', a)// a nao é acessivel fora da função