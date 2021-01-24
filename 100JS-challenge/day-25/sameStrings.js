// To solve this question, your friend writes the following code:

// function checkEquals(arr1, arr2) {
// if (arr1 === arr2) {
//   return true
//  } else {
//   return false
//  }
// }
// But testing the code, you see that something is not quite right. Running the code yields the following results:

// checkEquals([1, 2], [1, 3]) ➞ false
// // Good so far...

// checkEquals([1, 2], [1, 2]) ➞ false
// // Yikes! What happened?
// Rewrite your friend's code so that it correctly checks if two arrays are equal. The tests below should pass:

// Examples
// checkEquals([1, 2], [1, 3]) ➞ false

// checkEquals([1, 2], [1, 2]) ➞ true

// checkEquals([4, 5, 6], [4, 5, 6]) ➞ true

// checkEquals([4, 7, 6], [4, 5, 6]) ➞ false

function sameArr(arr1, arr2){
    //first make sure the nums in array are sorted 
   arr1= arr1.sort((a,b)=> a -b)
   arr2= arr2.sort((a,b)=> a -b)
   //compare each iteration to each other. If everyone of them is the same then return true
    //otherwise return false 
    return arr1.every((el, i)=> el===arr2[i])
}

console.log(sameArr([4, 7, 6], [4, 5, 6]))
//false

console.log(sameArr([4, 5, 6], [4, 5, 6]))
//true