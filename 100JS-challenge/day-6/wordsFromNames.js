// Write a function that returns true if a given name can generate an array of words.

// Examples
// anagram("Justin Bieber", ["injures", "ebb", "it"]) ➞ true

// anagram("Natalie Portman", ["ornamental", "pita"]) ➞ true

// anagram("Chris Pratt", ["chirps", "rat"]) ➞ false
// // Not all letters are used 

// anagram("Jeff Goldblum", ["jog", "meld", "bluffs"]) ➞ false
// // "s" does not exist in the original name
// Notes
// Each letter in the name may only be used once.
// All letters in the name must be used.

function anagram(name, words) {
    name = name.toLowerCase().split('').sort().filter(el=>el!==' ').join('')
    words = words.join(' ').split('').sort().filter(el=>el!==' ').join('')
    return name === words
}


//Why do we need to use join('') at the end to compare the strings vs comparing array to each other?

//in order to compare two arrays to each other we must first compare each idx using some type of loop
// or use stringify to convert the object to JSON string, join('') turining the array into a string 
//turns it into a primive value makes it easy to compare each element to each other 
console.log(anagram("Justin Bieber", ["injures", "ebb", "it"]))

//true

console.log(anagram("Jeff Goldblum", ["jog", "meld", "bluffs"]))
//false