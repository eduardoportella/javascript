function carregar () {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >=0 && hora < 12) {
    //bomdia
    img.src = 'manha.jpeg'
    document.body.style.background = '#fb9530'
    }
else if (hora >=12 && hora <= 18){
    //boatarde
    img.src = 'tarde.jpg'
    document.body.style.background = '#E4923E'

    }
else {
    //boanoite  
    img.src = 'noite.jpg'
    document.body.style.background = '#6957c7'
    }
}
