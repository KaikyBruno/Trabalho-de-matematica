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