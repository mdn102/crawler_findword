// Validate sewuence 

// Given two non-empty arrays of integers ., write a funtion that determines
// wherther the secons array is a subsequence of the first one 


function sequence(array, sequence){

    //settinh up the count that counts the same occurences
    let count = 0
    //itterating through array 
    for(let el of array){
        //if the sequence is an empty array get out of the loop 
        if (sequence.length === count) break;
        //adding count to the sequence allows us to iterate through it
        else if(sequence[count]===el){
            //once there is a match between the two arrays add one to the count therefor
            //moving forward with iterration 
            count++
        }
    }
    //if the length of the array equals to the count then it is true else it is false 
    return count===sequence.length

}

console.log(sequence([5, 1, 22, 25, 6, -1, 8, 10],[1, 6, -1, 10]))
// true

console.log(sequence([5, 1, 22, 25, 6, -1, 8, 10],[1, 6, -1, 10, 11, 11, 11, 11]))
//false 