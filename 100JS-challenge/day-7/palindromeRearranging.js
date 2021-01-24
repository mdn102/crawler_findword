// Given a string, find out if its characters can be rearranged to form a palindrome.

// Example

// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 50.

// [output] boolean

// true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.

function palindrome(str){
    //first create an object out of string that will hold each value pairs { ie: letter and hom many times it occured}
    let arr = str.split('').reduce((total, el) => {
        total[el] ? total[el]++ : total[el]=1
        return total

    }, {});
    //setting up global variable that will track the count of uneven numbers
    
    let count =0;
    //itterating thorugh the object to check the value of each key pair
   for(let [key, value] of Object.entries(arr)){
       if(value%2 !==0){
           count ++
       }
   }

   //logic return if ther is more than one odd number then the sting cannot be a palindrone
   return count > 1 ? false : true
}




console.log(palindrome('aaaabb'))
//true 

console.log(palindrome('fabcc'))
//false