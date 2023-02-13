var horaAtual = new Date();
var hora = horaAtual.getHours()
var min = horaAtual.getMinutes()
if(min < 10) {
    min = "0" + min
}
console.log(`Agora são exatamente ${hora}:${min} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
}	else if (hora<=18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}