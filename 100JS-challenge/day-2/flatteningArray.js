// 'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].

// Here is my code:

// function flatten(arr) {
//   arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr2.concat(arr[i]);
//   }
//   return arr2;
// }
// But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.

// Examples
// flatten([[1, 2], [3, 4]]) ➞ []
// // Expected: [1, 2, 3, 4]

// flatten([["a", "b"], ["c", "d"]]) ➞ []
// // Expected: ["a", "b", "c", "d"]

// flatten([[true, false], [false, false]]) ➞ []
// // Expected: [true, false, false, false]

function arrayFlat(arr){
    //creating new array that will hold the original array without dimentsion
    // const arrTwo = [];
    //looping throuh array into new array with values
    // for (let i=0; i<arr.length; i++){
    //     arrTwo.push(arr[i])
    // }


    //instead use the ... to copy over the array 
    const arrTwo = [...arr]
    //use the existing length of the dimensional array to flaten the existing rrays
    return arrTwo.flat(arr.length)
}

console.log(arrayFlat([["a", "b"], ["c", "d"]]))
//[ 'a', 'b', 'c', 'd' ]

console.log(arrayFlat([[1, 2], [3, 4]]))
//[ 1, 2, 3, 4 ]