// Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.

// Return a boolean value (true or false).
// The string can contain any character.
// When no x and no o are in the string, return true.
// Examples
// XO("ooxx") ➞ true

// XO("xooxx") ➞ false

// XO("ooxXm") ➞ true
// // Case insensitive.

// XO("zpzpzpp") ➞ true
// // Returns true if no x and o.

// XO("zzoo") ➞ false

function X0(str){
    let x=0; let o=0;
    str.toLowerCase().split('').map(el=>{
        if(el==='x'){
            x++;
        } 
        if(el==='o'){
            o++
        }
    })
    return x===o ? true : false;
}

console.log(X0("xooxx"))
//false

console.log(X0("ooxx"))
//true

console.log(X0("ooxXm"))
//true