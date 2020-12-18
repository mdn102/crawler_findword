// Given an array, transform that array into a mirror.
// Examples
// mirror([0, 2, 4, 6]) ➞ [0, 2, 4, 6, 4, 2, 0]
// mirror([1, 2, 3, 4, 5]) ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]

function mirror(arr){
    const arr2 = [];

    for(let i = arr.length-2; i>=0; i--){
        arr2.push(arr[i])
    }
    return [...arr, ...arr2]
}

console.log(mirror([0, 2, 4, 6]))
// [0, 2, 4, 6, 4, 2, 0]
console.log(mirror([1, 2, 3, 4, 5]))
// [1, 2, 3, 4, 5, 4, 3, 2, 1]