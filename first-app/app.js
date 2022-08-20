var readline = require('readline-sync');

var op = 1;

while(op != 0){
    var op = readline.question("Please enter an operator(+,-,*,/,%), 0=exit: ");
    if(op == '0'){
        break;
    }
    var num1 = readline.question("Please enter a number: ");
    var num2 = readline.question("Please enter another number: ");
    const calculator = require("./mate")
    let res = calculator.operation(num1, num2, op);
    
}




