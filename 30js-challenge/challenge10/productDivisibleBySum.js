// Write a function that returns true if the product of an 
// array is divisible by the sum of that same array.

// Examples
// divisible([3, 2, 4, 2]) ➞ false

// divisible([4, 2, 6]) ➞ true

function divisible(arr){ 
	const sum = arr.reduce((total, el) => total + el);
	const product = arr.reduce((total, el) => total * el);
	return product % sum === 0; 
}

console.log(divisible([3, 2, 4, 2]))
// false
console.log(divisible([4, 2, 6]))
// true
console.log(divisible([3, 2, 4, 1]))
// false
console.log(divisible([4, 4, 4, 4]))