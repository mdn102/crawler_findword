// Given a string, reverse all the words which have odd length. The even length words are not changed.

// Examples
// reverseOdd("Bananas") ➞ "sananaB"

// reverseOdd("One two three four") ➞ "enO owt eerht four"

// reverseOdd("Make sure uoy only esrever sdrow of ddo length")
// ➞ "Make sure you only reverse words of odd length"

function rev(str){
    str= str.split(' ')
    for(let i=0; i<str.length; i++){
        if(str[i].length%2!==0){
            str[i]=str[i].split('').reverse().join('')
        }
    }
    return str.join(' ')
}

console.log(rev("One two three four" ))

