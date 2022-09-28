const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "))
let numbers = Numbers()
console.log(userArray)
if(userArray[0] === numbers){
    console.log(true)
}