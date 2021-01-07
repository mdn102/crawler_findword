// This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are: 1, 3, 6, 10, 15. Write a function that converts n number of places with its corresponding number.

// Examples
// triangle(1) ➞ 1

// triangle(6) ➞ 21

// triangle(215) ➞ 23220

function triangle(el){
    let total = 0;
    if(el<=1){
        return el
    } else{
        for(let i=1; i<=el; i++){
            total+=i
        }
    }
    return total;
}

console.log(triangle(1))
console.log(triangle(2))
console.log(triangle(3))
console.log(triangle(8))
console.log(triangle(2153))
//Answer
// 1
// 3
// 6
// 36
// 2318781