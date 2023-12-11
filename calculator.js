let firstNumber = null; 
let secondNumber = null;
let operator = null;
let displayValue = '';
let displayValueTop = '';

const displayBottom = document.querySelector('#displayBottom');
const displayTop = document.querySelector("#displayTop");
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
    
    displayValue += e.target.value;
    displayValueTop += e.target.value;
    setNumbers();
    displayResult();
} 

function updateDisplayTop(e) {
    if(displayValueTop.charAt(displayValueTop.length - 1) === '/') return;
    if(displayValueTop.charAt(displayValueTop.length - 1) === '*') return;
    if(displayValueTop.charAt(displayValueTop.length - 1) === '-') return;
    if(displayValueTop.charAt(displayValueTop.length - 1) === '+') return;
    displayValueTop += e.target.value;
    displayValue = '';
    displayResult();
    displayResultTop();
}

function setNumbers(){
    if(operator === null){
        firstNumber = Number(displayValue);
    }
    else secondNumber = Number(displayValue);
}

function back(){
    if(operator !== null && (secondNumber === null || secondNumber === 0)){
        return;
    }
    
    displayValue = displayValue.toString().slice(0, -1);
    displayValueTop = displayValueTop.toString().slice(0, -1);
    setNumbers();
    displayResult();
    console.log(firstNumber, secondNumber, displayValue);
}

function clear(){
    displayValue = '';
    displayValueTop = '';
    firstNumber = null;
    secondNumber = null;
    operator = null;
    displayResult();
    displayBottomResult();
}

function callOperate(){
    if((firstNumber || secondNumber || operator) === null) return;
    if(isNaN(firstNumber) || isNaN(secondNumber)){
        clear();
        return;
    }

    displayValue = operate(firstNumber, secondNumber, operator);
    if(displayValue.toString().includes('.')){
        displayValue = displayValue.toFixed(2);
    }

    firstNumber = displayValue;
    secondNumber = null;
    operator = null;
    setNumbers();
    displayResult();
    displayBottomResult();
}

function displayResult(){
    //displayBottom.textContent = displayValue;
    displayTop.textContent = displayValueTop;
}

function displayBottomResult() {
    displayBottom.textContent = displayValue;
}
function displayResultTop(){
    displayTop.textContent = displayValueTop;
}

clearButton.addEventListener('click', (e) => {
    clear(e);
});

backButton.addEventListener('click', () => {
    back();
    console.log(firstNumber, secondNumber, displayValue, operator);

})

equalsButton.addEventListener('click', () => {
    if(secondNumber !== null){
        callOperate();
        displayValueTop = displayValue;
        displayBottom.textContent = '';
        displayResultTop();
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
        updateDisplayTop(e);
        console.log(firstNumber, secondNumber, displayValue, operator);
    });
});

numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => { 
        updateDisplay(e);
        console.log(firstNumber, secondNumber, displayValue, operator);
    }); 
});






