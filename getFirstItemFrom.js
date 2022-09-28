const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "))
console.log(userArray)
let firstItem = userArray[0]
console.log("The first Item is: " + firstItem)