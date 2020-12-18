/* 
Create a function that takes a sequence of either strings or 
numbers, removes the surrounding duplicates and returns an array 
of items without any items with the same value next to each other
and preserves the original order of items.
*/

// Examples
// uniqueInOrder("AAAABBBCCDAABBB") ➞ ["A", "B", "C", "D", "A", "B"]

// uniqueInOrder("ABBCcAD") ➞ ["A", "B", "C", "c", "A", "D"]

// uniqueInOrder([1, 2, 2, 3, 3]) ➞ [1, 2, 3]

function uniqueinOrder(sequence) {
    const arr = [];
    const final = [];
    typeof sequence === 'string' ? arr.push(sequence.split('')) : arr.push(sequence)

    const dupe = arr.flat();
    for (let i = 0; i < dupe.length; i++) {
        if (dupe[i] === 0) {
            final.push(dupe[i])
        } else {
            if (dupe[i] !== dupe[i - 1]) {
                final.push(dupe[i])
            }
        }
    }
    return final

}

console.log(uniqueinOrder("AAAABBBCCDAABBB"))
//[ 'A', 'B', 'C', 'D', 'A', 'B' ]
console.log(uniqueinOrder(["1", "2", "2", "3", "3"]))
//[ '1', '2', '3' ]