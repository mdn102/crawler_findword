// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

// Examples
// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

// numInStr(["abc", "abc10"]) ➞ ["abc10"]

// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

// numInStr(["this is a test", "test1"]) ➞ ["test1"]

function numInString(arr){
    const arr2=[];
    arr.map(el=>{
        var hasNum= /\d/;
        if(hasNum.test(el)===true){
            arr2.push(el)
        }
    })
    return arr2
}

console.log(numInString(["abc", "ab10c", "a10bc", "bcd"]))
//[ 'ab10c', 'a10bc' ]

var arr = [1,2,3];
var max = arr.reduce(function(a, b) {
  return Math.max(a, b);
});

console.log(max)