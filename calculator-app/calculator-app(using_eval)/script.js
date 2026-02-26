// This display variable is the core working of the whole program, it is changed dynamically and then used to update the html display-input element.
let display = ' ';

// This for loop continuously checks if any of the number buttons are pressed and it calls the appendValue function for whatever number button is pressed
for (let i = 0; i < 10; i++) {
    document.getElementById(i.toString()).addEventListener('click', function() {
        appendValue(i.toString());
    });
}

// These check for the button press of the other buttons on the calculator, calling the appropriate function depending on the button that is pressed (evaluate for equals, clear/remove for X or C and append for the symbols

// Equals sign (=)
document.getElementById('equals').addEventListener('click', evaluateExpression);

// Double zero button (00)
document.getElementById('00').addEventListener('click', function() {
    appendValue('00');
});

// The division button (/)
document.getElementById('/').addEventListener('click', function() {
    appendValue('/');
});

// The multiplication button (*)
document.getElementById('*').addEventListener('click', function() {
    appendValue('*');
});

// The addition button (+)
document.getElementById('+').addEventListener('click', function() {
    appendValue('+');
});

// The subtraction button (-)
document.getElementById('-').addEventListener('click', function() {
    appendValue('-');
});

// The decimal button (.)
document.getElementById('.').addEventListener('click', function() {
    appendValue('.');
});

// Clears the display
document.getElementById('clear').addEventListener('click', clearDisplay);

// Removes the last item in the display by using the slice method of js
document.getElementById('remove').addEventListener('click', removeLastCharacter);


// Adds the 'value' to the end of the display
function appendValue(value) {
    display += value;
    document.getElementById('display-input').value = display;
    console.log(display);
}

// Removes the last character from the display using the in built slice method
function removeLastCharacter() {
    display = display.slice(0, -1);
    document.getElementById('display-input').value = display;
    console.log(display);
}


// This function clears the display
// It sets the display-input value to an empty string
function clearDisplay() {
    display = '';
    document.getElementById('display-input').value = display;
    console.log(display);
}

// This function evaluates what's in the display variable
// It works by using the js inbuilt eval method, which runs math equation in display
// It also catches if there is an error, displaying error on the display and console logging what the error is
function evaluateExpression() {
    try {
        display = eval(display).toString();
        document.getElementById('display-input').value = display;
        console.log(display);
    } catch (error) {
        document.getElementById('display-input').value = 'Error';
        display = '';
        console.error('Invalid expression:', error);
    }
}