// Create a function that takes a string and replaces the vowels with another character.

// a = 1
// e = 2
// i = 3
// o = 4
// u = 5
// Examples
// replaceVowel("karachi") ➞ "k1r1ch3"

// replaceVowel("chembur") ➞ "ch2mb5r"

// replaceVowel("khandbari") ➞ "kh1ndb1ri"

function replaceVow(word){
    const vowel = { 'a':1, 'e':2, 'i':3, 'o':4, 'u':5};
    return [...word].map(i => i in vowel ? vowel[i] : i).join('')
}

console.log(replaceVow('appple'))
//1pppl2