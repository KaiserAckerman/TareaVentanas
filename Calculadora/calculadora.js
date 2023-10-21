function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    const expression = document.getElementById('result').value;
    try {
        const result = eval(expression);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function handleKeyPress(event) {
const key = event.key;
const result = document.getElementById('result');
const lastChar = result.value.slice(-1);

if (key === 'Enter') {
// Si la tecla es Enter (=), calcular el resultado
calculateResult();
} else if (key === 'c') {
// Si la tecla es Escape (C), borrar el resultado
clearResult();
} else if (key === 'Delete' || key === 'Backspace') {
// Si la tecla es "Delete" o "Backspace", eliminar un dígito
deleteDigit();
} else if (!isNaN(key) || (key === '+' || key === '-' || key === '*' || key === '/') && !isNaN(lastChar)) {
// Si la tecla es un número o un operador, añadirlo al resultado
appendToResult(key);
}
}
 // Agregar un evento de escucha para las pulsaciones de teclas al documento
 document.addEventListener('keydown', handleKeyPress);

 function deleteDigit() {
 const result = document.getElementById('result');
 result.value = result.value.slice(0, -1);
}