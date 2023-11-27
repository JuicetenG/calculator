let firstNumber = null; 
let secondNumber = null;
let operator = null;
let displayValue = '';
let operatorFlag = false;
let calculatedValue = 0; 

const display = document.querySelector('#calculatorDisplay');
const calculatorButtons = document.querySelectorAll('button');
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

function calculate(){
    if(operatorFlag === false){
        firstNumber = display.textContent;
    } else {
        secondNumber = display.textContent;
    }
    if(secondNumber){
        displayValue = operate(firstNumber, secondNumber);
    }
}

function updateDisplay(e){
    if(operatorFlag === false){
        displayValue += e.target.value;
        firstNumber = displayValue;
    } else {
        displayValue += e.target.Value;
        secondNumber = displayValue;
    }
    display.textContent = displayValue;
}

clearButton.addEventListener('click', () => {
    displayValue = '';
    firstNumber = null;
    secondNumber = null;
    operatorFlag = false;
});

equalsButton.addEventListener('click', () => {
    displayValue = calculatedValue;
    calculate();
    operatorFlag = false;  
    console.log(firstNumber);
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        operatorFlag = true; 
        console.log(operatorFlag);
    });
});

calculatorButtons.forEach((button) => {
    button.addEventListener('click', (e) => { 
        updateDisplay(e);
    }); 
});






