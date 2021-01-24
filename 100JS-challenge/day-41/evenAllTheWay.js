// Given an array of numbers, return an array which contains all the even numbers in the orginal array, which also have even indices.

// Examples
// getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]

// getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]

// getOnlyEvens([1, 2, 3, 4, 5]) ➞ []

function allEvens(arr){
    return arr.filter((el, idx)=> el%2===0 && idx%2===0)
}

console.log(allEvens([1, 3, 2, 6, 4, 8]))
//[ 2, 4 ]

console.log(allEvens([0, 1, 2, 3, 4]))