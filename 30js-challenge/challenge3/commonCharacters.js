/* 
Given two strings, find the number of common characters 
between them.
*/

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

function same (str1, str2){
    // converting strings into arrays 
    const arr = str1.split('');
    const arr2 = str2.split('');
    
    //implementing counter starting from zero
    let counter = 0;

    //creating a function that will loop thorough one array and check the values with 2nd array

    arr.forEach(el =>{
        for(let i=0; i < arr2.length; i++){
            if(el===arr2[i]){
                counter ++;
                
                //need to make sure to update array 2 every time we have a match
                //by removing the letter that was matched during each iteration
                arr2.splice(i,1);
                break;
            }
        }
    })
    return counter
}

console.log(same("aabcc", "adcaa"))
//3
console.log(same("aaa", "a"))