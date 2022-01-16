// let paciente = document.querySelector("#primeiro-paciente");
let pacientes = document.querySelectorAll(".paciente");

for (let i=0; i<pacientes.length; i++) {
    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;
    // let altura = (Number(tdAltura.textContent)).toFixed(2);

    let tdImc = paciente.querySelector(".info-imc");

    let pesoEhValido = validaPeso(peso);
    let alturaEhValida = validaAltura(altura);


    if (!pesoEhValido) {
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido";
        // paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida){
        console.log("Altura inválida"); 
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

function validaPeso(peso){
    if (peso<=0 || peso < 1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if (altura<=0 || altura <= 3){
        return true;
    } else {
        return false;
    }
}