// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

// Example

// For inputArray = [1, 1, 1], the output should be
// arrayChange(inputArray) = 3.


function arrayChange(arr){
    let total=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>= arr[i+1]){
            let add = (arr[i]-arr[i+1])+1
            total+=add
            arr[i+1]+=add
        }
    }
    return total
}

console.log(arrayChange([1,1,1]))
//3

console.log(arrayChange([-24875, -6401, 58256, 44456, 2244, -25333, -42389, -5975, 7650, -46343, -62011, -55366, 7802, -37699, 15461, 13309, -58664, 54557, 56324, -34397, -33024, -21934, -18861, -23196, 56542, -63986, 59833, -45610, -16948, 399, -7405, 54701, -57348, -32627, 65534, 615]))
//2199614

console.log(arrayChange([-1000, 0, -2, 0]))
//5