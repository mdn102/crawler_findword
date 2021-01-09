/*
Write a range function that takes two argumets and returns an 
array containing all the numbers from start to end.
*/

const arr = [];
function range(start, end, increment) {
    if (increment > 0) {
        for (let i = start; i <= end; i += increment) {
            arr.push(i)
        }
    } else {
        for (let i = start; i > 0; i += increment) {
            arr.push(i)
        }
    }
    return arr
};

/*
Wrote a sum function that takes an array of numbers and 
returs the sun of these numbers
*/

function sum(arr) {
    let total = 0;
    for (let i = 0; i <= arr.length; i++) {
        total += i
    }
    return total
}

// console.log(range(1,10,-1))
// console.log(arr.length)
// console.log(sum(arr))
console.log(sum(range(1, 10, 1)))
// 55