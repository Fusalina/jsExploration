let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo)
console.log(!!isAtivo) // o uso do ! é o operador NOT
console.log(!isAtivo)  // o uso do !! é duplo NOT == o valor inicial
// ! é usado para indicar que a variavel numerica deve ser lida como um valor logico

console.log('\nos verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')//com ao menos um espaço = true
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = Infinity))
console.log(!!(isAtivo = 33))

console.log('\nos falsos...')
console.log(!!(isAtivo = 0))//falso
console.log(!!0)
console.log(!!'')//string vazia = false
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('\npra finalizar...')
console.log(!!('' || null || 0 || ' ')) // nessa operaçao
/*
o js transforma todos os elementos em booleanos para fazer a comparação ou
e caso não tenha o duplo ! no começo, irá retornar o primeiro valor verdadeiro
*/
console.log(('' || null || 0 || 'teste' || 123))

console.log('\nexemplo de expressão logica com string')
let nome = ''
let nome2 = 'Jurassico'
console.log(nome || 'desconhecido')
console.log(nome2 || 'desconhecido')
