/*  
Some people are standing in a row in a park. 
There are trees between them which cannot be moved. 
Your task is rearrange the people by their heights 
in a non-descending order without moving the trees. 
People can be very tall! 
*/

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

function sortByHeight(a) {
    let arr = a.filter(el => el !== -1).sort((a, b) => a - b)
    return !a.includes(-1) ? arr : a.map((item) => {
        return item !== -1 ? arr.shift() : -1
    })
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))
