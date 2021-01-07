/* 
Create a function that takes a string and censors words 
over four characters with *.
*/
// Examples
// censor("The code is fourty") ➞ "The code is ******"

// censor("Two plus three is five") ➞ "Two plus ***** is five"

// censor("aaaa aaaaa 1234 12345") ➞ "aaaa ***** 1234 *****

function sensor(str) {
    const arr = str.split(' ');
    let answer = arr.map(el=>{
        if(el.length >4){
            let i='*';
            return i.repeat(el.length)
        } else {
            return el
        }
    })
    return answer.join(' ')
}


console.log(sensor("The code is fourty"))
// The code is ******

console.log(sensor("Two plus three is five"))
// Two plus ***** is five

console.log(sensor("aaaa aaaaa 1234 12345"))
//  ➞ "aaaa ***** 1234 *****