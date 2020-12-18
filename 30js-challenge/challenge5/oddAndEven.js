/* 
One Odd and One Even. 
Given a two digit number, 
return true if that number contains one even and one odd digit.
*/

// Examples
// oneOddOneEven(12) ➞ true

// oneOddOneEven(55) ➞ false

// oneOddOneEven(22) ➞ false

function evenOdd(n) {
    let arr = n.toString().split('')
    let sort =  arr.map(el => Number(el)) 
    for (let i = 0; i<sort.length; i++){
        if(sort[i]%2===0 && sort[i+1]%2!==0 || sort[i]%2 !==0 && sort[i+1]%2===0){
            return true
        } else {
            return false
        }
    }
    }
    
    console.log(evenOdd(23))
    //true
    
    console.log(evenOdd(22))
    //false

    console.log(evenOdd(33))
    //false