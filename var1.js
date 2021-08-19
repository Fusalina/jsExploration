// dentro do js, nao importa se a VAR esta interna a um escopo, ela se mantem visivel fora
{ 
    { 
        { 
            { 
                var sera = 'variavel visivel' 
                console.log(sera)
            } 
        } 
    } 
}
console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()
console.log(local)

/**
 * No exemplo do navegador, o professor explica sobre o objeto window
 * o qual carrega todos os elementos da pagina 
 * quando cria uma variavel local no console do navegador
 * a variavel de ex: A pode ser acessada pelo objeto window atraves do comando:
 * window.a
 * 
 * EVITAR VARIAVEIS QUE VÃO PARA O ESCOPO GLOBAL
 * pois a sobrescrita é facil de acontecer
 * 
 */