function tabuada(){
    let num = Number(document.getElementById('numero').value);
    let tab = document.getElementById('res')
    if (num.length == 0) {
        window.alert('ERRO')
    } else {
        tab.innerHTML = ' '
        let i = 1;
        for (i=0; i<=10; i++){
            item = document.createElement('option');
            item.text = `${num} x ${i} = ${num*i}`;
            item.value = `tab${i}`
            tab.appendChild(item); 
        }
    }
}