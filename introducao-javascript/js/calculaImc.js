// let paciente = document.querySelector("#primeiro-paciente");
let pacientes = document.querySelectorAll(".paciente");

for (let i=0; i<pacientes.length; i++) {
    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector(".info-imc");

    let pesoEhValido = true;
    let alturaEhValida = true;


    if (peso<=0 || peso>=1000){
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        // paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3){
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        // paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido){
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}


// titulo.addEventListener("click", mostraMensagem); //FUNCAO COMO PARAMETRO

// function mostraMensagem() {
//     console.log("Olá eu fui clicado!");
// }


// titulo.addEventListener("click", function(){ //FUNCAO ANONIMA
//     console.log("Olá eu fui clicado!");
// })


// titulo.addEventListener("click", () => { //ARROW FUNCTION
//     console.log("Olá, eu fui clicado!")
// })


function calculaImc(peso, altura){
    let imc=0;

    imc = peso / (altura*altura);

    return imc.toFixed(2);
}