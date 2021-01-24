// Given a number, return a string of the word "Boom", which varies in the following ways:

// The string should include n number of "o"s, unless n is below 2 (in that case, return "boom").
// If n is evenly divisible by 2, add an exclamation mark to the end.
// If n is evenly divisible by 5, return the string in ALL CAPS.
// If n is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
// The example below should help clarify these instructions.

// Examples
// boomIntensity(4) ➞ "Boooom!"
// // There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)

// boomIntensity(1) ➞ "boom"
// // 1 is lower than 2, so we return "boom"

// boomIntensity(5) ➞ "BOOOOOM"
// // There are 5 "o"s and 5 is divisible by 5 (all caps)

// boomIntensity(10) ➞ "BOOOOOOOOOOM!"
// // There are 10 "o"s and 10 is divisible by 2 and 5 (all caps and exclamati

function boom(n) {
    let rep = 'o';
    return n<2 ? `boom`
    : n%2===0 && n%5===0 && n!==0 ? `B${rep.repeat(n).toUpperCase()}M!`
    : n%2===0 ? `B${rep.repeat(n)}m!`
    : n%5===0 ?`B${rep.repeat(n).toUpperCase()}M`
    :`B${rep.repeat(n)}m`
}

console.log(boom(5))

//BOOOOOM

console.log(boom(1))
//boom

console.log(boom(10))
//BOOOOOOOOOOM!