// Given a string of numbers separated by a comma and space, return the product of the numbers.

// Examples
// multiplyNums("2, 3") ➞ 6

// multiplyNums("1, 2, 3, 4") ➞ 24

// multiplyNums("54, 75, 453, 0") ➞ 0

// multiplyNums("10, -2") ➞ -20

function multiplyNum(str) {
    let total = 1;
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i]) !== NaN) {
            total *= parseInt(arr[i])
        }
    }
    return total
}

console.log(multiplyNum("1, 2, 3, 4"))
//6