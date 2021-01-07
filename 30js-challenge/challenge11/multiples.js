/*
If we list all the natural numbers below 10 that are multiples 
of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the 
multiples of 3 or 5 below the number passed in
*/

function solution(number){
    //creating an array that will store all the nums from the numbe
    const arr = []
    for(let i=1; i<number; i++){
    arr.push(i)
    }
    const final = []
    arr.map(el =>{
    if(el%3===0 || el%5===0){
     final.push(el)
    } })
    return final.length <=0 ? 0 : final.reduce((total, el) =>total+el)
    }

console.log(solution(10))
//23
console.log(solution(0))
//0

//-----More elegant solution ----//

function numbers(num){
    let total  = 0;
    for(let i = 0; i<num; i++){
        if(i%5===0 || i%3===0){
            total +=i
        }
    }
    return total
}
console.log(numbers(10))
//23
console.log(numbers(0))
//0