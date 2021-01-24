// Create a function that returns true if smaller arrays can concatenate to form the target array and false otherwise.

// Examples
// canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) ➞ true

// canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) ➞ true

// canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
// // Duplicate 7s not found in target array.

// canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
// // Missing 6 from target array.
// Notes
// Arrays do not have to be sorted (see example #2).





function canConcatenate(arr, target) {
	let length = arr.length
	arr = arr.flat(length).sort((a,b)=>a-b)
	return arr.reduce((total, el)=> total+el) === target.reduce((total, el)=>total+el) ?
		true
	:false;
}

console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]))
//false 