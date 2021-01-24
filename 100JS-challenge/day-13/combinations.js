// Create a function that takes a variable number of groups of items, and returns the number of ways the items can be arranged, with one item from each group. Order does not matter.

// Examples
// combinations(2, 3) ➞ 6

// combinations(3, 7, 4) ➞ 84

// combinations(2, 3, 4, 5) ➞ 120

function combinations(items){
    let arr=[...arguments]
    return arr.filter(el=> el>0).reduce((total, el)=>total*el)
}

console.log(combinations(1,2,3))
//6
console.log(combinations(1,2,3,0,2))
//12