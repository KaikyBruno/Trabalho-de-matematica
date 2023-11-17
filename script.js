function bloqueado () {
    const janelabloqueado = document.getElementById ('janela-bloqueado')
    const container = document.getElementById ('container')
    const footer = document.getElementById ('footer')


    janelabloqueado.style.display = 'block'
    container.style.display = 'none'
    footer.style.display = 'none'

}

function voltarbloqueado() {
    const janelabloqueado = document.getElementById ('janela-bloqueado')
    const container = document.getElementById ('container')
    const footer = document.getElementById ('footer')


    janelabloqueado.style.display = 'none'
    container.style.display = 'flex'
    footer.style.display = 'block'


}

function info( ) {

    const formula = document.getElementById ('formula')

    formula.style.display = 'block'

}
function infoquit () {

    const formula = document.getElementById ('formula')

    formula.style.display = 'none'

}

function Errar () {
    const pergunta1 = document.getElementById ('pergunta1')
    const pergunta2 = document.getElementById ('segunda-pergunta')
    const pergunta3 = document.getElementById ('terceira-pergunta')
    const pergunta4 = document.getElementById ('quarta-pergunta')
    const pergunta5 = document.getElementById ('quinta-pergunta')
    const erro = document.getElementById ('erro')

    pergunta1.style.display = 'none'
    pergunta2.style.display = 'none'
    pergunta3.style.display = 'none'
    pergunta4.style.display = 'none'
    pergunta5.style.display = 'none'
    erro.style.display = 'block'
}

function Errar2 () {
    const segundoErro = document.getElementById ('segundo-erro')
    const pergunta6 = document.getElementById ('sexta-pergunta')
    const pergunta7 = document.getElementById ('setima-pergunta')
    const pergunta8 = document.getElementById ('oitava-pergunta')
    const pergunta9 = document.getElementById ('nona-pergunta')

    pergunta6.style.display = 'none'
    pergunta7.style.display = 'none'
    pergunta8.style.display = 'none'
    pergunta9.style.display = 'none'
    segundoErro.style.display = 'block'
}

function ErrarAngular() {
    const pergunta1Angular = document.getElementById ('pergunta1-angular')
    const pergunta2Angular = document.getElementById ('pergunta2-angular')
    const pergunta3Angular = document.getElementById ('pergunta3-angular')
    const pergunta4Angular = document.getElementById ('pergunta4-angular')
    const ErroAngular = document.getElementById ('erro-angular')

    pergunta1Angular.style.display = 'none'
    pergunta2Angular.style.display = 'none'
    pergunta3Angular.style.display = 'none'
    pergunta4Angular.style.display = 'none'
    ErroAngular.style.display = 'block'
}

function TentarNovamente () {
    const pergunta1 = document.getElementById ('pergunta1')
    const erro = document.getElementById ('erro')

    pergunta1.style.display = 'block'
    erro.style.display = 'none'
}

function TentarNovamente2 () {
    const pergunta6 = document.getElementById ('sexta-pergunta')
    const segundoErro = document.getElementById ('segundo-erro')

    pergunta6.style.display = 'block'
    segundoErro.style.display = 'none'
}

function TentarNovamenteAngular() {
    const ErroAngular = document.getElementById ('erro-angular')
    const pergunta1Angular = document.getElementById ('pergunta1-angular')

    ErroAngular.style.display = 'none'
    pergunta1Angular.style.display = 'block'
}

function acerto1 () {
    const pergunta1 = document.getElementById ('pergunta1')
    const pergunta2 = document.getElementById ('segunda-pergunta')

    pergunta1.style.display = 'none'
    pergunta2.style.display = 'block'
}
function acerto2 () {
    const pergunta2 = document.getElementById ('segunda-pergunta')
    const pergunta3 = document.getElementById ('terceira-pergunta')

    
    pergunta2.style.display = 'none'
    pergunta3.style.display = 'block'
}
function acerto3 () {
    const pergunta3 = document.getElementById ('terceira-pergunta')
    const pergunta4 = document.getElementById ('quarta-pergunta')

    pergunta3.style.display = 'none'
    pergunta4.style.display = 'block'
}
function acerto4 () {
    const pergunta4 = document.getElementById ('quarta-pergunta')
    const pergunta5 = document.getElementById ('quinta-pergunta')

    pergunta4.style.display = 'none'
    pergunta5.style.display = 'block'
}
function acerto5 () {
    const pergunta5 = document.getElementById ('quinta-pergunta')
    const completoPrimeiroNivel = document.getElementById ('completo')

    pergunta5.style.display = 'none'
    completoPrimeiroNivel.style.display = 'block'
}

function acerto6 () {
    const pergunta6 = document.getElementById ('sexta-pergunta')
    const pergunta7 = document.getElementById ('setima-pergunta')
    

    pergunta6.style.display = 'none'
    pergunta7.style.display = 'block'
}

function acerto7 () {
    const pergunta7 = document.getElementById ('setima-pergunta')
    const pergunta8 = document.getElementById ('oitava-pergunta')
    
    pergunta7.style.display = 'none'
    pergunta8.style.display = 'block'
}
function acerto8 () {
    const pergunta8 = document.getElementById ('oitava-pergunta')
    const pergunta9 = document.getElementById ('nona-pergunta')

    pergunta8.style.display = 'none'
    pergunta9.style.display = 'block'
}
function acerto9 () {
    const pergunta9 = document.getElementById ('nona-pergunta')
    const NivelConcluidoLinear = document.getElementById ('linear-completo')

    pergunta9.style.display = 'none'
    NivelConcluidoLinear.style.display = 'block'
}


function NivelConcluido() {
    
    const segundoNivel = document.getElementById ('container-segundo-nivel')
    const footer = document.getElementById ('footer')
    const primeiroConcluido = document.getElementById ('nivel-concluido')

    segundoNivel.style.display = 'none'
    footer.style.display = 'none'
    primeiroConcluido.style.display = 'block'
}

function buttonConcluiido() {
    const segundoNivel = document.getElementById ('container-segundo-nivel')
    const footer = document.getElementById ('footer')
    const primeiroConcluido = document.getElementById ('nivel-concluido')

    segundoNivel.style.display = 'flex'
    footer.style.display = 'block'
    primeiroConcluido.style.display = 'none'
}

function acerto1Angular() {
    const pergunta1Angular = document.getElementById ('pergunta1-angular')
    const pergunta2Angular = document.getElementById ('pergunta2-angular')

    pergunta1Angular.style.display = 'none'
    pergunta2Angular.style.display = 'block'
}
function acerto2Angular() {
    const pergunta2Angular = document.getElementById ('pergunta2-angular')
    const pergunta3Angular = document.getElementById ('pergunta3-angular')

    pergunta2Angular.style.display = 'none'
    pergunta3Angular.style.display = 'block'
}
function acerto3Angular() {
    const pergunta3Angular = document.getElementById ('pergunta3-angular')
    const pergunta4Angular = document.getElementById ('pergunta4-angular')

    pergunta3Angular.style.display = 'none'
    pergunta4Angular.style.display = 'block'
}
function acerto4Angular() {
    const pergunta4Angular = document.getElementById ('pergunta4-angular')
    const completoPrimeiroNivel = document.getElementById ('completo')

    pergunta4Angular.style.display = 'none'
    completoPrimeiroNivel.style.display = 'block'
}




    

