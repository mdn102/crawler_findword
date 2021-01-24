// Given an array of numbers, write a function that returns an array that...

// Has all duplicate elements removed.
// Is sorted from least to greatest value.
// Examples
// uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]

// uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]

// uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]
function uniqueSort(arr) {
    arr = arr.sort((a,b)=>a-b)
    let total = [];
       for(let i=0; i< arr.length; i++){
       if(total.indexOf(arr[i])=== -1){
           total.push(arr[i])
       }
   }
       return total
       
   }
console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]))
//[ 1, 2, 3, 4 ]