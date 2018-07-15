//Create variable and require readline sync from NPM
var rs = require('readline-sync');

//Create three variables asking for the numbers and operator
var firstNumber = rs.question("Please enter your first number: ");
var secondNumber = rs.question("Please enter your second number: ");
var operator = rs.question("Please enter your operator: ");

//Variable meshing the user numbers with operator
var operation = firstNumber + operator + secondNumber;

//variable for the result of var operation
var result = eval(operation);

//console.log the the result
console.log(result);