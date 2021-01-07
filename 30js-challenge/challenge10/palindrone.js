/* 
Write a function that returns true if a number is a 
palindrome.
*/
// Examples
// isPalindrome(838) ➞ true

// isPalindrome(4433) ➞ false


function isPalindrome(n) {
	let m = Number(n.toString().split('').reverse().join(''))
	return n===m
}

console.log(isPalindrome(838))
// true
console.log(isPalindrome(4433))
// false
console.log(isPalindrome(123))
//false
console.log(isPalindrome(12321))
//true