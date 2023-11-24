let firstNumber = null; 
let secondNumber = null;
let operator = null;

const display = document.querySelector('#calculatorDisplay');
const calculatorButtons = document.querySelectorAll('button');
const clearButton = document.querySelector('#clear');

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
            add(a, b);
            break;
        case '-':
            subtract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
            break;
    }
} 

calculatorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        display.textContent += e.target.value;
    });
});

clearButton.addEventListener('click', () =>{
    display.textContent = "";
});


