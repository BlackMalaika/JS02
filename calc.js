alert("This is a simple javascript calculator. It performs functions between just 2 numbers.");



function add(a, b) {
    alert("Result: "+ (a) + " + " + (b) + " = " + (a + b));
}
function divide(a, b) {
    alert("Result: " + (a) + " / " + (b) + " = " + (a / b));
}
function subtract(a, b) {
        alert("Result: "+ (a) + " - " + (b) + " = " + (a - b));
}
function multiply(a, b) {
    alert("Result: "+ (a) + " * " + (b) + " = " + (a * b));
}


function calculate(a, b, operation) {
    if (operation == "+") {
        add(a, b);
    } else if (operation == "-") {
        subtract(a, b);
    } else if (operation == "/") {
        divide(a, b);
    } else if (operation == "*") {
        multiply(a, b);
    } else {
        alert("Enter a valid operation.");
    }
}

let a = parseFloat(prompt("Enter the first number: "));
let b = parseFloat(prompt("Enter the second number: "));
let operation = prompt("Enter the operation you would like to perform: +, -, /, * ");

calculate(a, b, operation);
