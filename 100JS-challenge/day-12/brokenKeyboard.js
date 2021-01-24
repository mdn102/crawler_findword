// Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:

// findBrokenKeys(correct phrase, what you actually typed)
// Examples
// findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]

// findBrokenKeys("starry night", "starrq light") ➞ ["y", "n"]

// findBrokenKeys("beethoven", "affthoif5") ➞ ["b", "e", "v", "n"]

function broken(str1, str2){
    const final=[];
    str1.split('').filter((el, idx)=>{
        if(el!==str2[idx]){
            if(final.indexOf(el) === -1){
                final.push(el)
            }
        }
    })
    return final
}

console.log(broken("happy birthday", "hawwy birthday"))
//[ 'p' ]

console.log(broken("starry night", "starrq light"))
// [ 'y', 'n' ]
