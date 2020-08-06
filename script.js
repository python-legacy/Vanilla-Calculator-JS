let operator;
let num1;
let num2;
let result;

function determineOperator(id) {
    operator = id;
    console.log(operator);
}

function calculate() {
    num1 = parseFloat(document.getElementById('num1').value);
    num2 = parseFloat(document.getElementById('num2').value);
    
    console.log(num1);
    console.log(num2);


    switch (operator) {
        case '+':
            result = num1 + num2;
            console.log(result);
            document.getElementById('result').value = result
            break;
        
        case '-':
            result = num1 - num2;
            console.log(result);
            document.getElementById('result').value = result
            break;
            
        case '*':
            result = num1 * num2;
            console.log(result);
            document.getElementById('result').value = result
            break;

        case '/':
            result = num1 / num2;
            console.log(result);
            document.getElementById('result').value = result
            break;
        
        default:
            document.getElementById('result').value = `Input Invalide`  
            break;
    }
}
    


function clearCalculator() {
    num1 = null;
    num2 = null;
    operator = null;
    document.getElementById('result').value = "Result"
    document.getElementById('num1').value = "Enter Value 1:"
    document.getElementById('num2').value = "Enter Value 2:"
}
