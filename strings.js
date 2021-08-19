//const escola = "Cod3r"
const escola = "12345"

console.log(escola.charAt(4))
console.log(escola.charAt(5))

console.log(escola.charCodeAt(3))
console.log(escola.indexOf('C'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log("Escola ".concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))

console.log(escola.replace(/\d/, 'e'))  //expressão regular - simboliza digitos 
                                        //- sem a flag global altera a primeira ocorrencia
console.log(escola.replace(/\w/g, 'e')) //expressão regular - simboliza word
                                        //g dentro da expressão == flag global
console.log('Ana,Maria,Pedro'.split(','))                                        