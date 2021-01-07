// Create a function that takes two parameters and, if both parameters are strings, add them as if they were integers or if the two parameters are integers, concatenate them.

// Examples
// addition(1, 2) ➞ "12"

// addition("1", "2") ➞ 3

// addition("1", 2) ➞ null

function addition(a,b){
    if(a===String(a) && b===String(b)){
        return Number(a) + Number(b)    
    } if(a===Number(a) && b===Number(b)){
        return String(a)+String(b)
    } else {
        return null
    }
}

console.log(addition(1, 2))
console.log(addition("1",'2' ))
console.log(addition(1, "2"))
console.log(addition("1", 2))
//Answers
// 12
// 3
// null
// null