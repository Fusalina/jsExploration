var numero = 1
{
    //LET reconhece escopos de bloco
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)


//mesmo usando let, o comportamento é similar
let numero = 1
{
    //LET reconhece escopos
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)