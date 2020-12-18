// Write a function that takes an array of elements and 
// returns only the integers.

// Examples
// returnOnlyInteger([9, 2, 'space', 'car', 'lion', 16]) ➞  [9, 2, 16]
//returnOnlyInteger(['String',  true,  3.3,  1]) ➞ [1]

function returnOnlyInteger(arr) {
	const arr2 = []
	arr.map(el => {
	if(el === Number(el) && el%1===0)
		 arr2.push(el)	
	}) 
	return arr2
}

console.log(returnOnlyInteger([9, 2, 'space', 'car', 'lion', 16]))
// [ 9, 2, 16 ]

console.log(returnOnlyInteger(['hello', 81, 'basketball', 123, 'fox']))
// [ 81, 123 ]