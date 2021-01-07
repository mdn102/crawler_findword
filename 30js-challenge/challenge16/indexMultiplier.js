// Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

// Examples
// indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
// // (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

// indexMultiplier([-3, 0, 8, -6]) ➞ -2
// // (-3*0 + 0*1 + 8*2 + -6*3)

function multiplier (arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * i)
    }
    return newArr.length > 0 ? newArr.reduce((total, el) => total + el) : 0
}

console.log(multiplier([1, 2, 4, 5]));
// 25
console.log(multiplier([1, 2, 3, 4, 5]));
//  40

// another way to do it is to add the index value to the reduce function

// function mult(arr) {
//     return arr.reduce((total, el, i) => {

//         el * i + total
//         console.log(i)
//         console.log(el)
//         console.log(total)

//     })


// }

