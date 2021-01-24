// Convert Year to Century
// Write a function that takes a year and returns its corresponding century.

// Examples
// centuryFromYear(2005) ➞ 21

// centuryFromYear(1950) ➞ 20

// centuryFromYear(1900) ➞ 19

let century=year=> Math.ceil(year/100)

console.log(century(2021))
//21