// Write a function redundant that takes in a string str and returns a function that returns str.

// Examples
// const f1 = redundant("apple")
// f1() ➞ "apple"

// const f2 = redundant("pear")
// f2() ➞ "pear"

// const f3 = redundant("")
// f3() ➞ ""

function redundant(el){
    return function(redundant){
        return el;
    }
}

const f1 = redundant("apple")
const f2 = redundant("pear")
const f3 = redundant("")

console.log(f1())
console.log(f2())
console.log(f3())

// apple
// pear
//''