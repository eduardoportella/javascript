//HORAS
var agora = new Date()
var minutos = new Date()
var hora = agora.getHours()
var minutos = minutos.getMinutes()
console.log(`agora sao exatamente ${hora} horas e ${minutos} minutos.`)
if (hora < 12 && hora > 6) {
    console.log('Bom dia!')
}
else if (hora > 18){
    console.log('Boa noite!')
}
else if (hora > 0 && hora < 6) {
    console.log('Boa madrugada!')
}
else {
    console.log('Boa tarde!')
}