// Index Multiplier
// Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

// Examples
// indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
// // (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

// indexMultiplier([-3, 0, 8, -6]) ➞ -2
// // (-3*0 + 0*1 + 8*2 + -6*3)
// Notes
// All items in the array will be integers.


//Creating function using variable 
let indexMultiplier=(arr)=>{
    let multiplier=[]
    for(let i=0; i<arr.length; i++){
        multiplier.push(arr[i]*i)

    }
    return multiplier.length>0 ? multiplier.reduce((a,b)=>a+b) : 0
}

console.log(indexMultiplier([1, 2, 3, 4, 5]))
//40

// How Much is True?
// Create a function which returns the number of true values there are in an array.

// Examples
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0
// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

function countTrue(arr) {
	let total=0;
	let truth = arr.map(el=>{
		if(el===true){
			total ++
		}
	}) 
	return arr.length>0 ? total : 0
	 
}

console.log(countTrue([true, false, false, true, false]))
//2


// Get the Century
// Create a function that takes in a year and returns the correct century.

// Examples
// century(1756) ➞ "18th century"

// century(1555) ➞ "16th century"

// century(1000) ➞ "10th century"

// century(1001) ➞ "11th century"

// century(2005) ➞ "21st century"
// Notes
// All years will be between 1000 and 2010.
// The 11th century is between 1001 and 1100.
// The 18th century is between 1701-1800.

function getCentury(year){
    if(year%100===0){
        return `${year/100}th century`
    } else {
        let div=Math.ceil(year/100)
        return div>20 ? `${div}st century` : `${div}th century`
    }
}

console.log(getCentury(1005))
//11th century

console.log(getCentury(2005))
//21st century


// Triangular Number Sequence
// This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:

// 1, 3, 6, 10, 15
// This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on.

// Write a function that gives the number of dots with its corresponding triangle number of the sequence.

// Examples
// triangle(1) ➞ 1

// triangle(6) ➞ 21

// triangle(215) ➞ 23220

function triangle(n){
    let arr=[]
    for(let i=0; i<n; i++){
        arr.push(i+1)
    }
    return arr.reduce((a,b)=>a+b)
}
console.log(triangle(2153))
//2318781

console.log(triangle(2))
//3


// Reverse Words Starting With a Particular Letter
// Write a function that reverses all the words in a sentence that start with a particular letter.

// Examples
// specialReverse("word searches are super fun", "s")
// ➞ "word sehcraes are repus fun"

// specialReverse("first man to walk on the moon", "m")
// ➞ "first nam to walk on the noom"

// specialReverse("peter piper picked pickled peppers", "p")
// ➞ "retep repip dekcip delkcip sreppep"
// Notes
// Reverse the words themselves, not the entire sentence.
// All characters in the sentence will be in lower case.

function wordReversal(str, letter){
    str=str.split(' ')
    for(let i=0; i<str.length; i++){
        if(str[i].indexOf(letter)===0){
            str[i]=str[i].split('').reverse().join('')
        }
    }
    return str.join(' ')

}

console.log(wordReversal("word searches are super fun", "s"))
//word sehcraes are repus fun