/*
An array is positive dominant if it contains strictly 
more unique positive values than unique negative values.
Write a function that returns true if an array is positive 
dominant.
*/

// Examples
// [1, 1, 1, 1, -3, -4] ➞ false
// // there is only 1 unique positive value (1)
// // there are 2 unique negative values (-3, -4)

// [5, 99, 832, -3, -4] ➞ true

// [5, 0] ➞ true

// [0, -4, -1] ➞ false

function domain(n){
    let pos=[]; let neg=[];
    n.map(el=>{
        if(el<0){
            if(neg.indexOf(el)=== -1){
                neg.push(el)
            }
        }else {
            if(pos.indexOf(el)===-1){
                pos.push(el)
            }
        }
    })
    return pos.length > neg.length ? true : false

}
console.log(domain([1, 1, 1, 1, -3, -4]))
//false]

console.log(domain([5, 99, 832, -3, -4]))
//true

console.log(domain([1, 2, 3, -1]))
//true


