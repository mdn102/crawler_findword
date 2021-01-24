// Create a function that moves all capital letters to the front of a word.

// Examples
// capToFront("hApPy") ➞ "APhpy"

// capToFront("moveMENT") ➞ "MENTmove"

// capToFront("shOrtCAKE") ➞ "OCAKEshrt"
// Notes
// // Keep the original relative order of the upper and lower case letters the same.

function capToFront (word){
    //splitting up the string to make it into array that can be itterated 
    word=word.split('')
    //setting up empty arrays that will store the iformation 
    const upper=[]; const lower=[]

    //sorting the array with tetriary operation
    word.sort(el=>el===el.toUpperCase() ? upper.push(el) : lower.push(el))
    //putting the array together (concatinating)
     let arr=[...upper, ...lower]
    //returning array as a string 
     return arr.join('')


}

console.log(capToFront("hApPy"))
//APpy

console.log(capToFront('moveMENT'))
//MENTove

console.log(capToFront("aPPlE"))
//PPEl