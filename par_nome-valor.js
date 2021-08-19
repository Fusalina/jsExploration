// par nome/valor
const saudacao = 'Opa' // contexto léxico

function exec(){
    const saudacao = 'falaaaa'
    return saudacao

}

// objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua dos bobos',
        numero: 0
    }
}

console.log(saudacao)
console.log(exec())