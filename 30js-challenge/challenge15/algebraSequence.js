// Create a function that takes a number (step) as an argument and returns the amount of boxes in that step of the sequence.

// Box Sequence Image

// Step 0: Start with 0
// Step 1: Add 3
// Step 2: Subtract 1
// Repeat Step 1 & 2 ...

function boxSeq(num) {
	if(num==0) {
		return 0
	} if(num===1){
		return 3
	} if(num%2===0){
		return num
	} if(num%2 !==0){
		return num+2
	}
}

console.log(boxSeq(3));
//5

console.log(boxSeq(1));
//3

function box(step) {
	return step + (step % 2 * 2)
}
console.log(box(1));

const seq = step => (step % 2 === 0 ? step : step + 2);
console.log(seq(1));
