// Integer in Range?
// Create a function which validates whether a number n is exclusively within the bounds of lower and upper. Return false if n is not an integer.

// Examples
// intWithinBounds(3, 1, 9) ➞ true

// intWithinBounds(6, 1, 6) ➞ false

// intWithinBounds(4.5, 3, 8) ➞ false
// Notes
// Exclusively means that a number is considered not within the bounds if it is equal to the upper bound (see example #2).
// Bounds will be always given as integers.

function isWithingBounds(n, lower, upper){
    return lower <= n  && n< upper && Number.isInteger(n) ? true : false
}

console.log(isWithingBounds(3, 1, 9))
//true

console.log(isWithingBounds(6, 1, 6))
//false