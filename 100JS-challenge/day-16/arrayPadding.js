// You are given an array of up to four non-negative integers, each less than 256.

// Your task is to pack these integers into one number M in the following way:

// The first element of the array occupies the first 8 bits of M;
// The second element occupies next 8 bits, and so on.
// Return the obtained integer M.

// Note: the phrase "first bits of M" refers to the least significant bits of M - the right-most bits of an integer. For further clarification see the following example.

// Example

// For a = [24, 85, 0], the output should be
// arrayPacking(a) = 21784.

// An array [24, 85, 0] looks like [00011000, 01010101, 00000000] in binary.
// After packing these into one number we get 00000000 01010101 00011000 (spaces are placed for convenience), which equals to 21784.

function arrayPacking(a){
    //first we need to turn the array of numbers into an array of bit
    a=a.map(el=>el.toString(2));
    //adding additional zeros to make sure every bit is 8 digit
    for(let i=0; i<a.length; i++){
        while(a[i].length < 8){
            a[i]='0'+a[i]
        }
    }
    // The first element of the array occupies the first 8 bits of M;
    //This means the array of bits needs to be reversed
    //once reverse and joined together convert the string back into number
   return  parseInt(a.reverse().join(''),2)
    


}

console.log(arrayPacking([24, 85, 0]))
//21784

console.log(arrayPacking([187, 99, 42, 43]))
//724198331