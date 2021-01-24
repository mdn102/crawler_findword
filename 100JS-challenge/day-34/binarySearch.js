// Binary search algorithm with time complexity of O(logN) and space complexity of O(1)

function search(arr, target){
    //call out the beginning and the end of the array 
    let start=0; let end=arr.length-1

    //implementing while loop to check for the values

    while(start<=end){
        //math. floor to make sure there are no integers in the mid
        let mid=Math.floor((start+end)/2)
        if(arr[mid]===target){
            return mid
            //here we have to remove the right side of the array because 
            //were stating that the arr[mid] value is less then the target that means 
            // the value is located to wards the left side of the array 
            //therefor were are reassigning the value of start to the value of arr[mid]
        } else if( target < arr[mid]){
            end= mid -1
        //here we have a situation that the arr[mid] > target
        //therefor we need to reassign the end and cut off the right hand side of the array 
        } else {
            start= mid +1
        }

    }
    //in case there is not a match we bet -1
    return -1
}




console.log(search([1,2,3,4,5,6,7,8,9], 7))

//because there is a value of 7 in this array we get a return value of 6 which is the index
//of the match

console.log(search([1,2,3,4,5,6,7,8,9],11))

//because there is no 11 in this array we get return value of -1 

console.log(search([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 1))