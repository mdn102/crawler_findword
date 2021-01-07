// I am trying to filter out empty arrays from an array. In other words, I want to transform something that looks like this: ["a", "b", [], [], [1, 2, 3]] to look like ["a", "b", [1, 2, 3]]. My code looks like this:

// function arr(arr) {
//   return arr.filter(x => x !== [])
// }
// However, somehow, the empty arrays still exist. Fix this incorrect code to remove the empty arrays.

// Examples
// // What I want:
// arr(["a", "b", []]) ➞ ["a", "b"]
// arr([1, 2, [], 4]) ➞ [1, 2, 4]

// // What I am getting:
// arr(["a", "b", []]) ➞ ["a", "b", []]
// arr([1, 2, [], 4]) ➞ [1, 2, [], 4]

function arr(el){
    return el.filter(el=> el.length>0 || el === Number(el))
}
console.log(arr(['a', 'b', []]))
console.log(arr([1, 2, [], 4]))
console.log(arr([[], [], [], []]))
console.log(arr([1, 2, 3, 4]))
console.log(arr([1, [], [], 4]))

// [ 'a', 'b' ]
// [ 1, 2, 4 ]
// []
// [ 1, 2, 3, 4 ]
// [ 1, 4 ]