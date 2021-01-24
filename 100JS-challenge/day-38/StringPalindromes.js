// Write a function that recursively determines if a string is a palindrome.

// Examples
// isPalindrome("abcba") ➞ true

// isPalindrome("b") ➞ true

// isPalindrome("") ➞ true

// isPalindrome("ad") ➞ false
// Notes
// An empty string counts as a palindrome.

function isPalindrome(str){
    return str.split('').reverse().join('')===str
}

console.log(isPalindrome('abac'))
//false

console.log(isPalindrome('aba'))
//true 