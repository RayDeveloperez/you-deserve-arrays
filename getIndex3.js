const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "))
console.log(userArray)
let index = userArray
console.log("The second character in the 3rd item is: " + index[2])




/* const prompt = require('prompt-sync')({sigint: true}); 
let userArray = JSON.parse(prompt("Enter an array: "))

console.log(userArray);

if (userArray.length < 3){
console.log(userArray[userArray.length-1])
} else {
    console.log(userArray[2])
}

*/

