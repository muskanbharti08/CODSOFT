let currentInput = '';
let operator = '';
let firstOperand = null;

function handleButtonClick(event) {
    const buttonValue = event.target.textContent;

    if (!isNaN(buttonValue) || buttonValue === '.') {
        // If the button is a number or a dot
        currentInput += buttonValue;
    } else if (buttonValue === 'C') {
        // If the button is 'C', clear the display
        clearDisplay();
    } else if (buttonValue === '=') {
        // If the button is '=', perform the calculation
        performCalculation();
    } else {
        // If the button is an operator
        handleOperator(buttonValue);
    }

    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = null;
}

function performCalculation() {
    const secondOperand = parseFloat(currentInput);

    if (operator && !isNaN(secondOperand)) {
        switch (operator) {
            case '+':
                currentInput = firstOperand + secondOperand;
                break;
            case '-':
                currentInput = firstOperand - secondOperand;
                break;
            case '*':
                currentInput = firstOperand * secondOperand;
                break;
            case '/':
                currentInput = firstOperand / secondOperand;
                break;
            default:
                break;
        }
        operator = '';
        firstOperand = null;
    }
}

function handleOperator(selectedOperator) {
    const currentOperand = parseFloat(currentInput);

    if (!isNaN(currentOperand)) {
        if (firstOperand === null) {
            firstOperand = currentOperand;
        } else {
            performCalculation();
        }

        operator = selectedOperator;
        currentInput = '';
    }
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
