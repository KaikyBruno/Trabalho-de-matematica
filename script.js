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
    const erro = document.getElementById ('erro')

    pergunta1.style.display = 'none'
    erro.style.display = 'block'
}

function TentarNovamente () {
    const pergunta1 = document.getElementById ('pergunta1')
    const erro = document.getElementById ('erro')

    pergunta1.style.display = 'block'
    erro.style.display = 'none'
}
function acerto1 () {
    const pergunta1 = document.getElementById ('pergunta1')
    

    pergunta1.style.display = 'none'
}
