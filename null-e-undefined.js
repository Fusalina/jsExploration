/*
const a = {name: 'Teste'}
console.log(a)

const b = a

let c = 3
let d = c
d++

console.log(c)
console.log(d)
*/
// b = a trabalha como um ponteiro(atribuição por referencia)
// d = c atribuição por valor

let valor // nao inicializada
console.log(valor)
//gera um valor undefined pq nao foi atribuido valor a (valor)
//console.log(valor2)
//gera um erro pq a variavel nao foi definida

valor = null
console.log(valor)
//nao aponta para nenhum local na memoria

console.log(valor.toString())
//erro, nao pode operar toString em um valor null

const produto ={}
console.log(produto.preco)
//o atributo preco do objeto produto é undefined

produto.preco = 3.58
console.log(produto)

produto.preco = undefined //evitar! exemplo de atribuição indefinida
console.log(!!produto.preco)//retorna valor booleano 
console.log(produto)

produto.preco = null // produto esta sem preço
console.log(!!produto.preco)//false - se produto.preco esta setado vai dar falso, caso null
console.log(produto)