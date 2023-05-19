function MostrarNome() {
    let Nome = document.getElementById('pNome').value;
    let Sobrenome = document.getElementById('pSobre').value;
    let NomeCompleto = Nome + ' ' + Sobrenome;
    alert('Olá ' + NomeCompleto)
}
let numero1;
let numero2;
let resultado;


function somar() {
    numero1 = document.getElementById('MyCalc').pnumero1.value;
    numero2 = document.getElementById('MyCalc').pnumero2.value;               

    if (numero1 == ""||numero2 == "") {
        alert("Preencha todos os Campos");
    } else{
        resultado = parseInt(numero1) + parseInt(numero2);
        alert('O resultado da Soma é ' + resultado);
    }

    alert('O resultado é ' + resultado);
}

function mult() {
    numero1 = document.getElementById('MyCalc').pnumero1.value;
    numero2 = document.getElementById('MyCalc').pnumero2.value;               

    if (numero1 == ""||numero2 == "") {
        alert("Preencha todos os Campos");
    } else{
        resultado = parseInt(numero1) * parseInt(numero2);
        alert('O resultado da Multiplicação é ' + resultado);
    }
}

function sub() {
    numero1 = document.getElementById('MyCalc').pnumero1.value;
    numero2 = document.getElementById('MyCalc').pnumero2.value;               

    if (numero1 == ""||numero2 == "") {
        alert("Preencha todos os Campos");
    } else{
        resultado = parseInt(numero1) - parseInt(numero2);
        alert('O resultado da Subtração é ' + resultado);
    }
}

function div() {
    numero1 = document.getElementById('MyCalc').pnumero1.value;
    numero2 = document.getElementById('MyCalc').pnumero2.value;               

    if (numero1 == ""||numero2 == "") {
        alert("Preencha todos os Campos");
    } else if (numero2==0){
        alert("Não dividirás por ZERO")
    }else{
        resultado = parseInt(numero1) / parseInt(numero2);
        alert('O resultado da Divisão é ' + resultado);
    }
}