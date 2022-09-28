const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "))
console.log(userArray)
let length = true

if (userArray.length >= 10){

console.log( "~~The array lenght is at least 10~~")
} else if (userArray.length <= 10){
    console.log("~~The array length is not atleast 10~~")
}

/*
const prompt = require('prompt-sync')({sigint: true}); 

userArraylenght = userArray.lenght
console.log(userArraylength)




*/