const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "))
console.log(userArray)
console.log(typeof userArray); // array is considered an :object: type

let secondString = userArray[1]

console.log(secondString)

let firstCharOfSecondstring = secondString[0]
console.log(firstCharOfSecondstring)

console.log(userArray[1][0])