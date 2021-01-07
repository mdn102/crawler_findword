// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

// Examples
// removeDups([1, 0, 1, 0]) ➞ [1, 0]

// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

// removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]

function removeDups (arr) {
  return uniq = [...new Set(arr)]
}

console.log(removeDups(['John', 'Taylor', 'John']))

// ['John', 'Taylor'];
