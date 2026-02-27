// This file is just a test whether the tokenization of my Evaluator expression function is working correctly. 

let display = '10/2+15'

function evaluateExpression() {
    let stack = [];

    let tempString = ''
    for (let i = 0; i < display.length; i++) {
        if ((display[i] >= '0' && display[i] <= '9') || display[i] == '.') {
            tempString += display[i];
        } else {
            stack.push(tempString);
            stack.push(display[i]);
            tempString = '';
        }
    }
    if (tempString.length > 0) {
        stack.push(tempString);
    }
    console.log(stack);
}

// It is working correctly, as it properly pushes each number and operation into the stack separately, as can be seen in the console when this program is ran. 

evaluateExpression();

display = '1-1+100+304/120*10/';

evaluateExpression();