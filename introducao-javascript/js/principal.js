let titulo = document.querySelector(".titulo");
titulo.textContent = "JS eh legal";

let paciente = document.querySelector("#primeiro-paciente");

let tdPeso = paciente.querySelector(".info-peso");
let peso = tdPeso.textContent;

let tdAltura = paciente.querySelector(".info-altura");
let altura = tdAltura.textContent;

let tdImc = paciente.querySelector(".info-imc");

let imc = peso / (altura * altura);
tdImc.textContent = imc;

// operadores logicos