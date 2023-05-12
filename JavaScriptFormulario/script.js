function MostrarNome() {
    let Nome = document.getElementById('pNome').value;
    let Sobrenome = document.getElementById('pSobre').value;
    let NomeCompleto = Nome + ' ' + Sobrenome;
    alert('Olá ' + NomeCompleto)
}

function MyCalc() {
    let numero1 = document.getElementById('MyCalc').pnumero1.value;
    let numero2 = document.getElementById('MyCalc').pnumero2.value;
    let operacao = document.getElementById('MyCalc').operacao.value;
    let resultado;

    if (operacao == "+") {
        resultado = parseInt(numero1) + parseInt(numero2);
    } else if (operacao == "-") {
        resultado = parseInt(numero1) - parseInt(numero2);
    } else if (operacao == "*") {
        resultado = parseInt(numero1) * parseInt(numero2);
    } else if (operacao == "/") {
        if (parseInt(numero2) == 0) {
            document.write("Operacao irreconhecível");
        } else {
            resultado = parseInt(numero1) / parseInt(numero2);
        }
    } else {
        document.write("irreconhecível");
    }

    alert('O resultado é ' + resultado);
}