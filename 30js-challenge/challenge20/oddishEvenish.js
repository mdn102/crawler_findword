/* 
Create a function that determines whether a number is 
Oddish or Evenish. A number is Oddish if the sum of all of
its digits is odd, and a number is Evenish if the sum of 
all of its digits is even. If a number is Oddish, return 
"Oddish". Otherwise, return "Evenish".
For example, oddishOrEvenish(121) should return "Evenish", 
since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return 
"Oddish", since 4 + 1 = 5.
*/

// Examples
// oddishOrEvenish(43) ➞ "Oddish"

// oddishOrEvenish(373) ➞ "Oddish"

// oddishOrEvenish(4433) ➞ "Evenish"

function oddishEvenish(num){
    const arr = num.toString().split('');
    const digitalNum = arr.map(el => Number(el)).reduce((total, el)=> el+ total);

    return digitalNum%2===0 ? `Evenish` : `Oddish`
    

}

console.log(oddishEvenish(123))
// evenish

console.log(oddishEvenish(9845363))
// EVENISH

console.log(oddishEvenish(12))
// oddish

console.log(oddishEvenish(43))
//  ➞ "Oddish"

console.log(oddishEvenish(373))
// ➞ "Oddish"

console.log(oddishEvenish(4433))
// ➞ "Evenish"
