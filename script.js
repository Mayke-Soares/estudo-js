function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date
    var hora = data.getHours()
    var minut = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${minut} horas`
    if (hora <= 0 && hora < 12) {
        // Bom Dia!
        
        img.src = 'manha.png'
    } else if (hora >= 12 && hora < 18) {
        // Boa Tarde!
        img.src = 'tarde.png'
    } else
        // Boa Noite
        img.src = 'noite.png'

}