// minSwaps("1100", "1001") ➞ 1

// minSwaps("110011", "010111") ➞ 1

// minSwaps("10011001", "01100110") ➞ 4
// Notes
// Both binary strings will be of equal length.
// Both binary strings will have an equal number of zeroes and ones.
// A swap is switching two elements in a string (swaps do not have to be adjacent).

function swap(s1, s2){
    let count = 0;
    s1.split('').filter((el, i)=>{
        if(el !== s2[i]){
            count++
        }
    })
    return count/2;
}

console.log(swap("1100", "1001"))