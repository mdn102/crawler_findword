// Sort an Array by String Length
// Create a function that takes an array of strings and return an array, sorted from shortest to longest.

// Examples
// sortByLength(["Google", "Apple", "Microsoft"])
// ➞ ["Apple", "Google", "Microsoft"]

// sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
// ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]

// sortByLength(["Turing", "Einstein", "Jung"])
// ➞ ["Jung", "Turing", "Einstein"]

function strLength(arr){
    return arr.sort((a,b)=>a.length-b.length)
}

console.log(strLength(["Google", "Apple", "Microsoft"]))
//[ 'Apple', 'Google', 'Microsoft' ]

console.log(strLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]))
//[ 'Raphael', 'Leonardo', 'Donatello', 'Michelangelo' ]