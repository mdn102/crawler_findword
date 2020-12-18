/* 
Create a function that converts two arrays of x- and 
y- coordinates into an array of (x,y) coordinates.
*/
// Examples
// convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0])
// ➞ [[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]]

// convertCartesian([9, 8, 3], [1, 1, 1])
// ➞ [[9, 1], [8, 1], [3, 1]]

function convertCartesian(x, y) {
	const arr = [];
	for(let i = 0; i<x.length; i++){
		arr.push([x[i], y[i]])
	}
	return arr
}


console.log(convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0]), 
            [[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]]);