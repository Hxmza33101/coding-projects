let stack = ['1', '-', '1', '+', '100', '+', '304', '/', '120', '*', '10', '/', '10']

function completeDM(array) {
    let result = [];
    const operators = ['+', '-', '*', '/'];

    for (let i = 0; i < array.length; i++) {
        if (!operators.includes(array[i])) {
            result.push(parseFloat(array[i]));
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
                    i++;
                } else {
                    throw new Error("Invalid expression");
                }
            } else if (array[i] == '/') {
                if (!operators.includes(result[result.length-1])) {
                    //Checks to see if the last thing added to the results array is a number
                    let temp = parseFloat(result[result.length-1]) / parseFloat(array[i+1])
                    result.pop();
                    result.push(temp);
                    i++;
                } else {
                    throw new Error("Invalid expression");
                }
        } 
    }
    return result;
}

console.log(completeDM(stack));