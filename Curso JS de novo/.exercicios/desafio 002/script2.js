function identificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('idade');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Erro. Digite novamente')
    } else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
        } else if (fsex[1].checked){
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}