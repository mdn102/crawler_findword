function giveMeThree (a , b, c){
    console.log('a',a)
    console.log('b', b)
    console.log('c', c)
}
giveMeThree(1,2,3)
// a 1
// b 2
// c 3

const colors = ['blue', 'yellow', 'pink'];

//if we pass in the colors into the function c
//all then we get the following 

giveMeThree(colors)
//a [ 'blue', 'yellow', 'pink' ]
// b undefined
// c undefined


//If we use spread iterator 

giveMeThree(...colors)
// a blue
// b yellow
// c pink


//----------------- References in Array-------------//

const num = [1,2,3]
// const num and const copy share the same reference in memory 
// there for they will be true when evaluated against each other
const copy = num
// spreadNum and num are stored in different references
// therefor they do not equate to true
const spreadNum = [...num]

console.log(num===copy)
//true
console.log(num===spreadNum)
//false

console.log(colors.typeof)