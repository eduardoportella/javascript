function trocar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();

    if (hora >= 0 && hora < 12){
        msg.innerHTML = 'Bom dia';
        img.src = 'imagens/foto1.png';
    }

    if (hora >= 12 && hora < 18){
        msg.innerText = 'Boa tarde';
        img.src = 'imagens/foto2.png';
    }

    if (hora >= 18){
        msg.innerHTML = 'Boa noite'
        img.src = 'imagens/foto3.png';
    }
    console.log(hora);
}