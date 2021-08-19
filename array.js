const valores =[7.7 , 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])// nao existe a posição no array

valores[4] = 10
console.log(valores)

valores[10] = 10
console.log(valores) // js responde que existem posições sem valor dentro do array
console.log(valores.length)//tamanho do array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log()

