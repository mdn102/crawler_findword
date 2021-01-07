// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

// Examples
// changeEnough([2, 100, 0, 0], 14.11) ➞ false

// changeEnough([0, 0, 20, 5], 0.75) ➞ true

// changeEnough([30, 40, 20, 5], 12.55) ➞ true

// changeEnough([10, 0, 0, 50], 3.85) ➞ false

// changeEnough([1, 0, 5, 219], 19.99) ➞ false


function changeEnough(change, amountDue) {
	let arr = change.map(el =>{
		if(el===change[0]){
			return el *.25
		} if(el===change[1]){
			return el*.10
		}if(el===change[2]){
			return el*0.05
		} else{
			return el *0.01
		}
	})
	let total = arr.reduce((total , el)=>{
		return total + el;
	})
	return total >= amountDue
}

console.log(changeEnough([2, 100, 0, 0], 14.11));
console.log(changeEnough([0, 0, 20, 5], 0.75));
console.log(changeEnough([30, 40, 20, 5], 12.55));
console.log(changeEnough([10, 0, 0, 50], 13.85));
console.log(changeEnough([1, 0, 5, 219], 19.99));
console.log(changeEnough([1, 0, 2555, 219], 127.75));
console.log(changeEnough([1, 335, 0, 219], 35.21));
//Answers 
// false
// true
// true
// false
// false
// true
// true