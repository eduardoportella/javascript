function identificar(){
    let ano = (new Date().getFullYear());
    let anoNascimento = Number(document.getElementById('idade').value);
    let res = document.querySelector('div#res');

    if (anoNascimento > ano){
        window.alert('ERRO. Digite os dados novamente');
    } else {
        let sexo = document.getElementsByName('radsex');
        let idade = ano - anoNascimento;
        let genero = ''
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (sexo[0].checked){
            genero = 'Homem';
            if (idade >=0 && idade<=10){
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
            } else if (idade >10 && idade <21){
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if (idade >=21 && idade < 60){
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else if (idade >= 60){
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
        } else if (sexo[1].checked){
            genero = 'Mulher';
            if (idade >=0 && idade<=10){
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
            } else if (idade >10 && idade <21){
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if (idade >=21 && idade < 60){
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else if (idade >= 60){
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }
        console.log(`Detectamos ${genero} com ${idade} anos`); //TEM PARENTESES
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`; //NAO TEM POIS RECEBE CARACTERES
        res.appendChild(img);

    }
    
}