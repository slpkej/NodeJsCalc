var rs = require('readline-sync');

var firstNumber = rs.question("Please enter your first number: ");
var secondNumber = rs.question("Please enter your second number: ");
var operator = rs.question("Please enter your operator: ");

var operation = firstNumber + operator + secondNumber;

var result = eval(operation);

console.log(result);