/* Create a function that returns an Earned Run Average 
(ERA). An ERA is calculated by multiplying 9 by the 
quotient of Earned Runs Allowed er divided by ip Innings 
Pitched.
*/

/* In baseball statistics, innings are represented with a 
fractional part of .1 (1/3) or .2 (2/3) to represent the 
number of outs in an inning. A whole number or a number 
with a fractional part of .0 represents a full inning with 
three outs. Check the Resources tab for a deeper explanation.
*/

// Examples
// era(22, 99) ➞ 2.00

// era(23, 99.1) ➞ 2.08

// era(24, 99.2) ➞ 2.17


era = ((er, ip) => {
    //creating aFixed with 3 decimal points bc we have can not roumd the second number
    let total = ((er/ip)*9).toFixed(3).split('');
    //using pop method to remove the last index from the array 
    total.pop();
    //Joining the array and returning a srting 
    return total.join('')

});

console.log(era(22, 99))
//2.00

console.log(era(24, 99.2))
//2.17