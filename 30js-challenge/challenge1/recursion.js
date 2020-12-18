//Write a function that finds the sum of the first n natural number, 
// a recursive function
function sum(n){
    if(n==0){
        return n
    }
    return n+sum(n-1)
}

console.log(sum(16))
//136
console.log(sum(11))
//66
console.log(sum(2))
//3


//Base/Exponent Example, recursive function

function power(base, exponent){
    if( exponent === 0){
        return 1
    }
    else{
        return base * power(base, exponent-1)
    }
}

console.log(power(2,3))
//8
console.log(power(11,21))
//7.40024994425816e+21

console.log(power(11,2))
//7.40024994425816e+21