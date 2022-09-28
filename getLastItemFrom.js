const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "))
console.log(userArray)
let lastItem = userArray
console.log("The last Item is: " + lastItem[userArray.length - 1])

