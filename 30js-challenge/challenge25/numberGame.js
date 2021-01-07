/* A positive number's population is the number of 1s in 
its binary representation. An evil number has an even numbered population, whereas an odious number has an odd numbered population. Moreover, a number is pernicious if its population is a 
prime number.
*/

/* Create a function that takes a number as an argument 
and returns a sorted array of all its descriptors 
("Evil", "Odious", or "Pernicious").
*/

// Examples
// howBad(7) ➞ ["Odious", "Pernicious"]
// // binary = 111

// howBad(17) ➞ ["Evil", "Pernicious"]
// // binary = 10001

// howBad(23) ➞ ["Evil"]
// // binary = 10111

howBad = (num) =>{
    const arr=[];
    let binary = num.toString(2).split('');
    let total = binary.reduce((total, el)=>{
        return Number(el) + Number(total)
    });
    total%2===0 ? arr.push('Evil') : arr.push('Odious')

    if(total===2 || total!==1 && total%2!==0){
        arr.push('Pernicious')
    }
    return arr
}
console.log(howBad(17))
//[ 'Evil', 'Pernicious' ]

console.log(howBad(66))
//[ 'Evil', 'Pernicious' ]

console.log(howBad(23))
//[ 'Evil' ]