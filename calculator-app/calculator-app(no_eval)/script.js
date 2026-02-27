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

function evaluateExpression() {
    let stack = [];
    let stack1 = [];

    let x = 0;
    let tempString = '';
    while (x < display.length) {
        if ((display[i] > '0' && display[i] < '9') || display[i] == '.') {
            tempString += display[i];
        } else if (display[i] == '+' || display[i] == '-' || display[i] == '*' || display[i] == '/') {
            stack.push(tempString);
            stack.push(display[i]);
        }
        x++;
    }

    for (let j = 0; j < stack.length; j++) {
        if (stack[i] == '*' || stack[i] == '/') {

        }
    }
}