/* 
A repdigit is a positive number composed out of the same digit.
Create a function that takes an integer and returns whether it's 
a repdigit or not.
*/

// Examples
// isRepdigit(66) ➞ true

// isRepdigit(0) ➞ true

// isRepdigit(-11) ➞ false

function repdigit (n){
    const arr = n.toString().split('')
    let check = arr[0]
    let final = arr.every(el => el===check)
    return final
}

console.log(repdigit(1234))
//false
console.log(repdigit(111))
//true