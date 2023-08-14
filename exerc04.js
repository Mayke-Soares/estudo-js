// CONDIÇÃO COMPOSTA - JavaScript

var agora = new Date 
var hora = agora.getHours() // hora, tempo real
var minutos = agora.getMinutes() // minutos, tempo real
var f = hora + minutos // Contatenação
console.log(`Agora são exetamente ${hora}:${minutos} horas.`) 
if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}