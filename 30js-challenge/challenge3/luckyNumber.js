/* 
Ticket numbers usually consist of an even number of digits. 
A ticket number is considered lucky if the sum of the first half 
of the digits is equal to the sum of the second half.
*/

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.

function isLucky(n) {
    let arr = n.toString().split('');
    let total1 = [];
    let total2 = [];
    let nums = arr.map(el => Number(el))
    let half = nums.length/2

    for(let i=0; i<nums.length; i++){
        if(i+1 <= half ){
            total1.push(nums[i])
        } else {
            total2.push(nums[i])
        }
    }

    let num1 = total1.reduce((total, el)=> total+el)
    let num2  = total2.reduce((total, el)=> total+el)

    return num1===num2

}

console.log(isLucky(1230))
//true
console.log(isLucky(10))
console.log(isLucky(1121))