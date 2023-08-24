function verificar() {
    var data = new Date()
        var ano = data.getUTCFullYear()
        var fano = document.getElementById('txtano')
        var res = document.querySelector('div#res')
        if (fano.ariaValueMax.length == 0 || fano.value > ano) {
            window.alert('Verificar os dados e tente novamente')
        } else {
            var fsex = document.getElementsByClassName('radsex')
            var idade = ano = Number(fano.value)
            var gênero = ''
            if (fsex[0].checked) {
                gênero = 'Homem'
            } else if (fsex[1].checked) {
                gênero = 'Mulher'
            }
            res.computedStyleMap.txtAling = 'center'
            res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        }
    
}