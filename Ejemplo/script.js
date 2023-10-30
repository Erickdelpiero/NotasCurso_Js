let operandoA = '';
let operandoB = '';
let operacion = '';

function presionarNumero(numero) {
    if(operacion === '') {
        operandoA = operandoA + numero;
        actualizarDisplay();
    } else {
        operandoB = operandoB + numero;
        actualizarDisplay();
    }
}

function operacion(signo) {
    operacion = signo;
}

function calcular() {
    let resultado = 0;
    switch(operacion) {
        case '+':
            resultado = parseFloat(operandoA) + parseFloat(operandoB);
            break;
        case '-':
            resultado = parseFloat(operandoA) - parseFloat(operandoB);
            break;
        case '*':
            resultado = parseFloat(operandoA) * parseFloat(operandoB);
            break;
        case '/':
            resultado = parseFloat(operandoA) / parseFloat(operandoB);
            break;
    }
    operandoA = resultado.toString();
    operandoB = '';
    operacion = '';
    actualizarDisplay();
}

function limpiar() {
    operandoA = '';
    operandoB = '';
    operacion = '';
    actualizarDisplay();
}

function actualizarDisplay() {
    document.getElementById('display').innerText = operandoA + operacion + operandoB;
}
