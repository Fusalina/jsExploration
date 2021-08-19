//função sem retorno
//bloco de codigo nomeado
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2) 
/* 
se a funcao for chamada com apenas um valor de 
entrada, o segundo valor será operado como undefined
*/
imprimirSoma(2, 3, 4, 5, 6, 7, 8)
/*
nesse modelo somente os dois primeiros valores são operados
os outros sao ignorados
*/
imprimirSoma()
/*
o resultado dessa função retorna um NaN(not a number)
*/

//funcao com retorno
function soma(a, b=0){ //TRATAMENTO DE ENTRADA - ao igualar um valor dentro dos parametros, vc preseta um valor
    return a + b
}

console.log(soma(3,3))