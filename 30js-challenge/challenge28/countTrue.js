/*  
Create a function which returns the number of true 
values there are in an array.
*/

// Examples
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

function countTrue(arr) {
    if(arr.length < 1) return 0;
    else {
        return arr.reduce((total,el)=> {
        el === true ? total++ : total+=0
            return total
        })
    }
    }

console.log(countTrue([true, false, false, true, false]))
// 2

console.log(countTrue([false, false, false]))
// 0

console.log(countTrue([]))
// 0