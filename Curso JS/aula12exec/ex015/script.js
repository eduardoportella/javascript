function verificar() {
    var data = new Date()
    ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var r = document.querySelector('div#res')

    if (fAno.value == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        res.innerHTML = `Idade calculada ${idade}`
        var gen = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >=0 && idade < 10){
                //crianca
                img.setAttribute('src', 'homemcrianca.jpg')
            }
            else if (idade >=10 && idade < 21){
                //jovem
                img.setAttribute('src', 'homemjovem.jpg')
            }
            else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'homemadulto.jfif')
            }
            else {
                //idoso
                img.setAttribute('src', 'homemidoso.jpg')
            }
        }
        else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >=0 && idade < 10){
                //crianca
                img.setAttribute('src','mulhercrianca.jfif')
            }
            else if (idade >=10 && idade < 21){
                //jovem
                img.setAttribute('src', 'mulherjovem.jpg')
            }
            else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'mulheradultaa.jpg')
            }
            else {
                //idoso
                img.setAttribute('src', 'mulheridosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}