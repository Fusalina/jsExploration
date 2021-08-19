console.log(typeof Object) // retorna function

// console.log(typeof new Object()) -> o exemplo abaixo faz um paralelo com o chamamento de um construtor
console.log(typeof new Object) // retorna object

const Cliente = function() {}
console.log(typeof Cliente) // retorna function
console.log(typeof new Cliente) // retorna object

class Produto{} // ES 2015(ES6) - versão do js - ecma script
console.log(typeof Produto) // retorna function
console.log(typeof new Cliente()) // retorna object




