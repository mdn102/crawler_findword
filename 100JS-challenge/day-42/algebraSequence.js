// Algebra Sequence — Boxes
// Create a function that takes a number (step) as an argument and returns the amount of boxes in that step of the sequence.



// Step 0: Start with 0
// Step 1: Add 3
// Step 2: Subtract 1
// Repeat Step 1 & 2 ...
// Examples
// boxSeq(0) ➞ 0

// boxSeq(1) ➞ 3

// boxSeq(2) ➞ 2
// Notes
// Step (the input) is always a positive integer (or zero).

//  : step+2
// function boxSeq(step) {
//   return step%2===0 ? step : step+2
  
// }

function sequence(num){
    return num%2===0 ? num : num+2
}

console.log(sequence(7))
//9

console.log(sequence(1))
//3
console.log(sequence(2))
//2