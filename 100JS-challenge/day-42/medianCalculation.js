// Calculate the Median
// Create a function that takes an array of numbers and return its median. If the input array is even length, take the average of the two medians, else, take the single median.

// Examples
// median([2, 5, 6, 2, 6, 3, 4]) ➞ 4

// median([21.4323, 432.54, 432.3, 542.4567]) ➞ 432.4

// median([-23, -43, -29, -53, -67]) ➞ -43

function median (arr) {
    arr = arr.sort((a,b)=>a-b)
    let med = Math.floor(arr.length/2)
    return arr.length%2!==0 ? arr[med] : (arr[med]+arr[med-1])/2
  
}

console.log(median([1,2,3]))
//2

console.log(median([1,3,5,7]))
//7

console.log(median([3,6,4,9]))
//5