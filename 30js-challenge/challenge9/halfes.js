/* 
Create a function that takes a number and return an array 
of three numbers: half of the number, quarter of the number 
and an eighth of the number.
*/
// Examples
// halfQuarterEighth(6) ➞ [3, 1.5, 0.75]

function halves(el){
    const arr = [];
    arr.push(el/2)

    for(let i=0; i<2; i++){
        arr.push(arr[i]/2)
    }
    return arr
}

console.log(halves(5))
//[ 2.5, 1.25, 0.625 ]
console.log(halves(6))
//[3, 1.5, 0.75]
console.log(halves(11))
//[ 5.5, 2.75, 1.375 ]
console.log(halves(21))
//[ 10.5, 5.25, 2.625 ]