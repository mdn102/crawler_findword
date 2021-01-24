// Create a function that takes two "sorted" arrays of numbers and returns an array of numbers which are common to both the input arrays.

// Examples
// commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]

// commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]

// commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]

// commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []
// Notes
// Arrays are Sorted!! Try doing this problem with O(n + m) time complexity

function commonElements(arr1, arr2) {
	//let arr = arr1.filter(el => arr2.includes(el))
	var results = [];
	for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) !== -1 && results.indexOf(arr1[i])!== 1){
        results.push(arr1[i]);
    }
}
	return results
	
}

console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3]))