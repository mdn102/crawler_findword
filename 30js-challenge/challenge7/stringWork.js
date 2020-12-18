/*
Write a function that returns the lexicographically first and 
lexicographically last rearrangements of a string. Output the 
results in the following manner:
firstAndLast(string) ➞ [first, last]
firstAndLast("marmite") ➞ ["aeimmrt", "trmmiea"]
*/

function firstAndLast(s) {
	let arr = [];
	let string = s.split('')
	arr.push(string.sort().join(''))
	arr.push(string.sort().reverse().join(''))
	return arr
}