// reversedBinaryInteger(10) ➞ 5
// // 10 = 1010 -> 0101 = 5

// reversedBinaryInteger(12) ➞ 3
// // 12 = 1100 -> 0011 = 3

// reversedBinaryInteger(25) ➞ 19
// // 25 = 11001 -> 10011 = 19

// reversedBinaryInteger(45) ➞ 45
// // 45 = 101101 -> 101101 = 45


function reverseBinary(num){
    const bin = num.toString(2).split('').reverse().join('');
    return parseInt(bin, 2)
}

console.log(reverseBinary(10))
// 5

console.log(parseInt('234567', 2))

let number = 11

let numString = number.toString(2)
console.log(numString)

console.log(parseInt(numString ,2))

console.log(reverseBinary(10));
//  10 = 1010 -> 0101 = 5

console.log(reverseBinary(12));
//  12 = 1100 -> 0011 = 3

console.log(reverseBinary(25));
//  25 = 11001 -> 10011 = 19

console.log(reverseBinary(45));
//  45 = 101101 -> 101101 = 45

