// A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become .

// Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// Function Description

// Complete the function rotLeft in the editor below. It should return the resulting array of integers.

// rotLeft has the following parameter(s):

// An array of integers .
// An integer , the number of rotations.
// Input Format

// The first line contains two space-separated integers  and , the size of  and the number of left rotations you must perform.
// The second line contains  space-separated integers .

function leftRotation(a,b){
    //using spread operator 
    const arr=[...Array(a).keys()]
    const arr2=[];
    let el=arr.splice(0,b)
    arr2.push(...el)
    return [...arr, ...arr2]

}

console.log(leftRotation(7,5))
//[
//     5, 6, 0, 1,
//     2, 3, 4
//   ]