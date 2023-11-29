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
    if(e.target.value === '.' && displayValue.includes('.')) return;
    
    displayValue += e.target.value;
    if(operatorFlag === false){
        firstNumber = Number(displayValue);
    }
    else if(operatorFlag === true){
        secondNumber = Number(displayValue);
    } 
    display.textContent = displayValue;
} 

function callOperate(){
    calculatedValue = operate(firstNumber, secondNumber, operator);
    firstNumber = calculatedValue;
    secondNumber = null;
    displayResult();
    console.log(firstNumber, secondNumber, calculatedValue, displayValue, operator);
}

function displayResult(){
    display.textContent = calculatedValue;
}

clearButton.addEventListener('click', (e) => {
    displayValue = '';
    firstNumber = null;
    secondNumber = null;
    calculatedValue = null;
    operator = null;
    operatorFlag = false;
    updateDisplay(e);
});

equalsButton.addEventListener('click', () => {
    if(firstNumber && secondNumber !== null){
        callOperate();
    }
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(secondNumber !== null){
            callOperate();
        }
        
        displayValue = '';
        operatorFlag = true;
        operator = e.target.value;
    });
});

numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => { 
        updateDisplay(e);
    }); 
});






