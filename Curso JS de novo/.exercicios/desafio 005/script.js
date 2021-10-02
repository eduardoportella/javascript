let vetor = [];


function adicionar(){
    let num = Number(document.getElementById('numero').value);
    let tab = document.getElementById('select');
    if (num < 1 || num > 100) {
        window.alert('ERRO');
    } else if(vetor.indexOf(num) != -1){
        window.alert('Valor ja adicionado');
    } 
    else {
        item = document.createElement('option');
        item.text = `Valor ${num} adicionado`;
        tab.appendChild(item);
        vetor.push(num);
    }
}

function finalizar(){
    if (vetor.length == 0){
        window.alert('ERRO')
    } else {
        let res = document.getElementById('res');
        let soma = 0;
        for (let i=0; i <vetor.length; i++){
                soma = soma + vetor[i];
        }
        let media = soma/vetor.length;
        vetor.sort()
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${vetor.length} elementos </p>`
        res.innerHTML += `<p> O maior número digitado foi o ${vetor[vetor.length-1]} </p>`
        res.innerHTML += `<p> O menor número digitado foi o ${vetor[0]} </p>`
        res.innerHTML += `<p> A soma de todos os números é ${soma}</p>`
        res.innerHTML += `<p> A média dos números é ${media} </p>`
    }
}
