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
            return divide(a, b);
            break;
    }
} 

function updateDisplay(e){
    if(e.target.value === '.' && displayValue.includes('.')) return;
    /*if(e.target.value === 'back'){
        back();
        setNumber(); 
        displayResult();
        return;
    } */
    
    displayValue += e.target.value;
    setNumber();
    displayResult();
} 

function setNumber(){
    if(operator === null){
        firstNumber = Number(displayValue);
    }
    else secondNumber = Number(displayValue);
}

function back(){
    if(operator !== null && secondNumber === null){
        operator = null;
        displayValue = firstNumber;
    }
    
    displayValue = displayValue.toString().slice(0, -1);
    setNumber();
    displayResult();
    console.log(firstNumber, secondNumber, displayValue);
}

function clear(e){
    displayValue = '';
    firstNumber = null;
    secondNumber = null;
    operator = null;
    operatorFlag = false;
    updateDisplay(e);
}

function callOperate(){
    if((firstNumber || secondNumber || operator) === null) return;
    displayValue = operate(firstNumber, secondNumber, operator);
    firstNumber = displayValue;
    secondNumber = null;
    operator = null;
    setNumber();
    displayResult();
}

function displayResult(){
    display.textContent = displayValue;
}

clearButton.addEventListener('click', (e) => {
    clear(e);
});

backButton.addEventListener('click', () => {
    back();
})

equalsButton.addEventListener('click', () => {
    if(secondNumber !== null){
        callOperate();
    }
    console.log(firstNumber, secondNumber, displayValue);
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(secondNumber !== null){
            callOperate();
        }
        displayValue = '';
        operator = e.target.value;
        console.log(firstNumber, secondNumber, displayValue);
    });
});

numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => { 
        updateDisplay(e);
        console.log(firstNumber, secondNumber, displayValue);
    }); 
});






