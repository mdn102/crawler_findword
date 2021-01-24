// Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".

// Examples
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"

// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"

// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"

function sevenBooms(arr){
    return arr.join(' ').indexOf(7) !== -1 ? true : false;
}

console.log(sevenBooms([8, 6, 33, 100]))
//false

console.log(sevenBooms([8, 6, 373, 100]))
//true
