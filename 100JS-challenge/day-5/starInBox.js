// Create a function that returns true if an asterisk * is inside a box.

// Examples
// inBox([
//   "###",
//   "#*#",
//   "###"
// ]) ➞ true

// inBox([
//   "####",
//   "#* #",
//   "#  #",
//   "####"
// ]) ➞ true

// inBox([
//   "*####",
//   "# #",
//   "#  #*",
//   "####"
// ]) ➞ false

// inBox([
//   "#####",
//   "#   #",
//   "#   #",
//   "#   #",
//   "#####"
// ]) ➞ false

// function inBox(arr){
//     for(i in arr){
//         if(arr[i].indexOf('*')!== -1 && arr[i]!==1 && arr[i]!== arr[i].length){
//             return true
//         } else {
//             return false 
//         }
//     }

// }
// function inBox(arr) {
// 	var length = arr.filter(i =>i.includes("*")).length;
// 	return length > 0 ? true : false;
// }\

// function inBox(arr){
//     for(var i in arr){
//        return arr[i].indexOf('*') !== -1 ? true : false; 
           
// }
// }
// function inBox(arr) {
// 	for (var i in arr) {
// 		if (arr[i].indexOf('*') != -1 && i>0  && i<arr.length-1) return true;
// 	}
// 	return false;
// }

// const str = "I am happy"
// console.log(str.length)

function inBox(arr) {
    let result = [] //keeping the result of eadh line 
	for(let i in arr){ //iteration through array
    arr[i].indexOf('*')=== -1 ? result.push(false)  //checking to see if the array has a string with '*' in it
     : arr[i].indexOf('*') === 0 || arr[i].indexOf('*' )=== arr[i].length-1  ? false
     //checking to see if the star is located in the beginning of the string or the end 
     : result.push(true)
     //else push true of the above conditions are false
    }

    return result.every(el=>el===false) ? false 
    //if every item in the result array equals to false then the answer is false 
    : result.some(el=>el==='doubleFalse') ? false
    //if the array has a doubleFalse as a sting that means the array is 
    : result[0]=== true ||  result[result.length-1]===true ? false 
    : true
}


console.log(inBox([
    "###",
    "# #*",
    "# * #",
    "####"
  ]))

  //false 

  console.log(inBox([
    "##",
    "#*#",
    "###"
  ]))

  console.log(inBox([
      "#####",
      "#   #",
      "#   #",
      "#   #",
      "#####"
    ]))

    console.log(inBox([
        "#####",
        "#  *  ",
        "#   #",
        "#   #",
        "#####"
      ]))