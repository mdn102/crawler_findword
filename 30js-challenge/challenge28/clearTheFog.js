/* 
Create a function which returns the word in the string, 
but with all the fog letters removed. However, if the 
string is clear from fog, return "It's a clear day!".
*/

// Examples
// clearFog("sky") ➞ "It's a clear day!"

// clearFog("fogfogfffoooofftreesggfoogfog") ➞ "trees"

// clearFog("fogFogFogffffooobirdsandthebeesGGGfogFog") ➞ "birdsandthebees"


// function clearFog(str) {
// 	const arr = str.toLowerCase().split('')
// 	if(arr.indexOf('f')=== -1 || arr.indexOf('o')===-1 || arr.indexOf('g')===-1){
// 		return `It's a clear day!`
// 	} else{
// 	let arr2=[]
// 	for(let i of arr){
// 		if( i==='g' || i==='o' || i==='f'){
// 			arr2.push()
// 		} else{
// 			arr2.push(i)
// 		}
// 	}
// 	return arr2.join('')
// 	}
// }






// Refractored Code Using Filter Method
function clearFog(str) {
	const arr = str.toLowerCase().split('')
	if(arr.indexOf('f')=== -1 || arr.indexOf('o')===-1 || arr.indexOf('g')===-1){
		return `It's a clear day!`
	} else{
	return arr.filter(el => el!=='f' && el!=='o' && el!=='g').join('')
	
	}
}

console.log(clearFog("fogfogfffoooofftreesggfoogfog"))
// trees

console.log(clearFog('cat'))
// It's a clear day!

console.log(clearFog("fogFogFogffffooobirdsandthebeesGGGfogFog"))
// birdsandthebees