// Create a function that takes numbers as arguments, adds them together, and returns the product of digits until the answer is only 1 digit long.

// Examples
// sumDigProd(16, 28) ➞ 6
// // 16 + 28 = 44
// // 4 * 4 =  16
// // 1 * 6 = 6

// sumDigProd(0) ➞ 0

// // sumDigProd(1, 2, 3, 4, 5, 6) ➞ 2

// function sumDigProd(...args) {
	
// 	let total =  args.reduce((total, el)=> total+el)
// 	console.log(total)
// 	if(total<10){
// 		return total
// 	} else {
// 		if(total > 10){
// 			 return total.toString().split('').reduce((total, el)=>{
// 				let sum = total * parseInt(el) 
// 					return sum < 10 ?  sum 
// 					: sumDigProd(sum)
// 			 })
			
// 		}
// 	}
	
// }



// --------------This ex uses arguments to pull data dynamically into function argumetn-------------

//above can see that I am using rest Paramenters a new edition of ECMA script not sustainable in LOOPY

function sumDigProd() {
    let total=0;

	if(arguments.length > 1){
       for(let i=0; i<arguments.length; i++){
           total = total+ arguments[i]
       }
    } else {
        total= arguments[0];
    }
     return multiply(total);
    }
function multiply(total){
let multiplier = 1;

   if (total<10)return total;
   else {
    let string = total.toString().split('');
  
        for(let i=0; i<string.length; i++){
            multiplier = multiplier*string[i]
        }
   }
   return multiplier < 10 ? multiplier : sumDigProd(multiplier)

}
	// console.log(total)
// 	if(total<10){
// 		return total
// 	} else {
// 		if(total > 9 ){
// 			let string =  total.toString().split('');
// 			let multiplier=1;
// 			for(let i=0; i<string.length; i++){
// 				multiplier =  multiplier*string[i]
// 			}
// 			//total.split('').reduce((mult, el)=>{
// 				//let multiplier = parseInt(mult) * parseInt(el)
// 				//return multiplier < 10 ? multiplier 
// 				 //: sumDigProd(multiplier)
				
				
// 			 //})
// 			return multiplier < 10 ?  multiplier 
// 			: sumDigProd(multiplier)
// 		} 
// 	}
	
// }

console.log(sumDigProd(17737, 98723,2))
//6

console.log(sumDigProd(1))