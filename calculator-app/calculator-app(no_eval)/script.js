let display = ' ';

for (let i = 0; i < 10; i++) {
    document.getElementById(i.toString()).addEventListener('click', function() {
        appendValue(i.toString());
    });
}


document.getElementById('equals').addEventListener('click', evaluateExpression);

document.getElementById('00').addEventListener('click', function() {
    appendValue('00');
});

document.getElementById('/').addEventListener('click', function() {
    appendValue('/');
});

document.getElementById('*').addEventListener('click', function() {
    appendValue('*');
});

document.getElementById('+').addEventListener('click', function() {
    appendValue('+');
});

document.getElementById('-').addEventListener('click', function() {
    appendValue('-');
});

document.getElementById('.').addEventListener('click', function() {
    appendValue('.');
});

document.getElementById('clear').addEventListener('click', clearDisplay);

document.getElementById('remove').addEventListener('click', removeLastCharacter);


function appendValue(value) {
    display += value;
    document.getElementById('display-input').value = display;
    console.log(display);
}

function removeLastCharacter() {
    display = display.slice(0, -1);
    document.getElementById('display-input').value = display;
    console.log(display);
}

function clearDisplay() {
    display = '';
    document.getElementById('display-input').value = display;
    console.log(display);
}

// function evaluateExpression() {
//     let stack = [];
//     let stack1 = [];

//     let x = 0;
//     let tempString = '';
//     while (x < display.length-1) {
//         if ((display[x] > '0' && display[x] < '9') || display[x] == '.') {
//             tempString += display[x];
//         } else if (display[x] == '+' || display[x] == '-' || display[x] == '*' || display[x] == '/') {
//             stack.push(tempString);
//             stack.push(display[i]);
//         }
//         x++;
//     }
//     stack.push(tempString);

//     for (let j = 0; j < stack.length-1; j++) {
//         if (stack[j-1] == null || stack[j+1] == null) {
//                 throw new Error('Invalid expression');
//         }   else {
//                 if ((stack[j] == '*' || stack[j] == '/') && (stack[j+1] != '+' || stack[j+1] != '-' || stack[j-1] != '+' || stack[j-1] != '-')) {
//                     if (stack[j] == '*') {
//                         stack1.push(parseFloat(stack[j - 1]) * parseFloat(stack[j + 1]));
//                     }
//                     if (stack[j] == '/') {
//                         stack1.push(parseFloat(stack[j - 1]) / parseFloat(stack[j + 1]));
//                     }
//                 }
//             }
//     }
// }

function evaluateExpression() {
    let tokenized = tokenizeExpression();
    let DM = completeDM(tokenized);
    display = completeAS(DM);

    console.log(display);
    document.getElementById('display-input').value = display;
}

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
    return stack;
}

function completeDM(array) {
    let result = [];
    const operators = ['+', '-', '*', '/'];

    for (let i = 0; i < array.length; i++) {
        if (!operators.includes(array[i])) {
            result.push(array[i]);
        } else if (array[i] == '+' || array[i] == '-') {
            result.push(array[i]);
        }   else if (i + 1 >= array.length) {
                throw "Invalid expression"
            }   else if (array[i] == '*') {
                    if (!operators.includes(result[result.length-1])) {
                    //Checks to see if the last thing added to the results array is a number
                    let temp = parseFloat(result[result.length-1]) * parseFloat(array[i+1])
                    result.pop();
                    result.push(temp);
                } else {
                    throw error = Error("Invalid expression");
                }
            } else if (array[i] == '/') {
                if (!operators.includes(result[result.length-1])) {
                    //Checks to see if the last thing added to the results array is a number
                    let temp = parseFloat(result[result.length-1]) / parseFloat(array[i+1])
                    result.pop();
                    result.push(temp);
                } else {
                    throw error = Error("Invalid expression");
                }
        } 
    }
    return result;
}

function completeAS(array) {
    let result = [];
    const operators = ['+', '-', '*', '/'];

    for (let i = 0; i < array.length; i++) {
        if (!operators.includes(array[i])) {
            result.push(array[i]);
        } else if (i + 1 >= array.length) {
                throw "Invalid expression"
            }   else if (array[i] == '+') {
                    if (!operators.includes(result[result.length-1])) {
                    //Checks to see if the last thing added to the results array is a number
                    let temp = parseFloat(result[result.length-1]) + parseFloat(array[i+1])
                    result.pop();
                    result.push(temp);
                    i++;
                } else {
                    throw error = Error("Invalid expression");
                }
            } else if (array[i] == '-') {
                if (!operators.includes(result[result.length-1])) {
                    //Checks to see if the last thing added to the results array is a number
                    let temp = parseFloat(result[result.length-1]) - parseFloat(array[i+1])
                    result.pop();
                    result.push(temp);
                    i++
                } else {
                    throw error = Error("Invalid expression");
                }
        } 
    }
    return result;
}