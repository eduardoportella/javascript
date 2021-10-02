function contar() {
    var ini = document.getElementById('txtInicio')
    var fim = document.getElementById('txtFim')
    var passo = document.getElementById('txtPasso')
    var res = document.getElementById('res')


    if (ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        res.innerHTML = 'Faltam dados!'
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
        }

        if (i < f) { //contagem crescente
            for(let c = i;c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449} `
            }
        
        }
        else { //contagem decrescente
            for(let c = i; c>= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            
        }
        res.innerHTML += `\u{1F3C1}` //bandeirinha no final
    }
}