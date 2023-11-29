let firstNumber = null; 
let secondNumber = null;
let operator = null;
let displayValue = '';
let operatorFlag = false;
let calculatedValue = 0;

const display = document.querySelector('#calculatorDisplay');
const numberButtons = document.querySelectorAll('.number');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equals');
const operatorButtons = document.querySelectorAll('.operator');

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b; 
}

function divide(a, b){
    return a / b;
}

function operate(a, b, operator){
    switch (operator){
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
    }
} 

function updateDisplay(e){
    displayValue += e.target.value;
    if(operatorFlag === false){
        firstNumber = Number(displayValue);
    }
    else if(operatorFlag === true){
        secondNumber = Number(displayValue);
    } 
    display.textContent = displayValue;
}

function displayResult(){
    display.textContent = calculatedValue;
}

clearButton.addEventListener('click', (e) => {
    displayValue = '';
    firstNumber = null;
    secondNumber = null;
    operatorFlag = false;
    updateDisplay(e);
});

equalsButton.addEventListener('click', () => {
    calculatedValue = operate(firstNumber, secondNumber, operator);
    displayValue = calculatedValue;
    operatorFlag = false; 
    operatorIncrement = 0;
    displayResult();
    console.log(firstNumber, secondNumber, displayValue);
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        displayValue = '';
        operatorFlag = true;
        operator = e.target.value;

        if(secondNumber !== null){
            console.log(firstNumber, secondNumber, calculatedValue, displayValue);
            calculatedValue = operate(firstNumber, secondNumber, operator);
            firstNumber = calculatedValue;
            displayValue = '';
            displayResult();
        }
    });
});

numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => { 
        updateDisplay(e);
        console.log(firstNumber, secondNumber, displayValue);
    }); 
});






