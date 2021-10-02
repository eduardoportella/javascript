function contar(){
    let inicio = Number(document.getElementById('inicio').value);
    let fim = Number(document.getElementById('fim').value);
    let passo = Number(document.getElementById('passo').value);
    let passoteste = document.getElementById('passo').valueAsNumber;
    let res = document.getElementById('resP')
    let i = 0;
    let aux = 0; 
    if (passo == 0 || inicio == fim) {
        alert('ERRO')
    } else {
        res.innerHTML = ' '
        if (inicio < fim) {
             for (i = inicio; inicio<=fim; inicio = inicio+passo)
                res.innerHTML += inicio + ' \u{1F449} ';
            res.innerHTML += '\u{1F3C1}'
        }
        else if(fim < inicio){
            for (i = inicio; inicio >= fim; inicio = inicio - passo)
                res.innerHTML += inicio + ' \u{1F449}';
            res.innerHTML += '\u{1F3C1}'
        }
    }
    res.style.textAlign = 'center'
}