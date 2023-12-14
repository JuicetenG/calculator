let firstNumber = null; 
let secondNumber = null;
let operator = null;
let displayValue = '';

const display = document.querySelector('#calculatorDisplay');
const numberButtons = document.querySelectorAll('.number');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equals');
const operatorButtons = document.querySelectorAll('.operator');
const backButton = document.querySelector('#back');

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
            if(b === 0){
                display.textContent = 'nah bruv';
                return;
            }
            return divide(a, b);
            break;
    }
} 

function updateDisplay(e){
    if(e.target.value === '.' && displayValue.includes('.')) return;
    displayValue += e.target.value;
    setNumbers();
    displayResult();
} 

function setNumbers(){
    if(operator === null){
        firstNumber = Number(displayValue);
    }
     else secondNumber = Number(displayValue);
}

function displayResult(){
    display.textContent = displayValue;
}

function callOperate(){
    if((firstNumber || secondNumber || operator) === null) return;
    
    displayValue = operate(firstNumber, secondNumber, operator);
    if(displayValue === undefined) return;
    if(displayValue.toString().includes('.')) displayValue = displayValue.toFixed(2);
   
    firstNumber = displayValue;
    secondNumber = null;
    operator = null;
    setNumbers();
    displayResult();
}

function back(){
    if(operator !== null && secondNumber === null) return;
    displayValue = displayValue.toString().slice(0, -1);
    setNumbers();
    displayResult();
}

function clear(){
    displayValue = '';
    firstNumber = null;
    secondNumber = null;
    operator = null;
    displayResult();
}

function clearErrors(){
    if(display.textContent === 'nah bruv' || displayValue.toString() === 'NaN') clear();
}


backButton.addEventListener('click', () => {
    clearErrors();
    back();
});


clearButton.addEventListener('click', () => {
    clear();
});

equalsButton.addEventListener('click', () => {
    if(secondNumber !== null) callOperate();
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(secondNumber !== null) callOperate();
        clearErrors();
        displayValue = '';
        if(firstNumber !== null) operator = e.target.value;
    });
});

numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => { 
        clearErrors();
        updateDisplay(e);
    }); 
});






