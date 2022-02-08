// let pacientes = document.querySelectorAll(".paciente"); //ja declarado no form.js

let tabela = document.querySelector("table");

tabela.addEventListener("dblclick", () =>{
    let alvoEvento = event.target; //codigo em varias linhas
    let paiDoAlvo = alvoEvento.parentNode;
    
    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(() => {
        // event.target.parentNode.remove(); //codigo em uma linha nao funciona aq
        paiDoAlvo.remove();
    }, 500);
});

// pacientes.forEach(function(paciente) {
//     paciente.addEventListener("dblclick", function() {
//         this.remove(); //this, nesse caso seria o paciente, que chamou o evento
//     });
// });