// Tic Tac Toe
// Given a 3x3 matrix of a completed tic-tac-toe game, create a function that returns whether the game is a win for "X", "O", or a "Draw", where "X" and "O" represent themselves on the matrix, and "E" represents an empty spot.

// Examples
// ticTacToe([
//   ["X", "O", "X"],
//   ["O", "X",  "O"],
//   ["O", "X",  "X"]
// ]) ➞ "X"

// ticTacToe([
//   ["O", "O", "O"],
//   ["O", "X", "X"],
//   ["E", "X", "X"]
// ]) ➞ "O"

// ticTacToe([
//   ["X", "X", "O"],
//   ["O", "O", "X"],
//   ["X", "X", "O"]
// ]) ➞ "Draw"
// Notes
// Make sure that if O wins, you return the letter "O" and not the integer 0 (zero) and if it's a draw, make sure you return the capitalised word "Draw". If you return "X" or "O", make sure they're capitalised too.


function match(arr){
    //assign value to each element in the array using 1 fr x and 0 for y

    arr = arr.map(el=> el.map(i=> i==='X' ?  1 :
    i==='O'? 0 : null))
   // return arr

   //diagonal count if count === 3 the winner is X or ====0 then the winner is Y else its a tie
   let diag1 = 0; let diag2=0;
   for(let i=0; i<arr.length; i++){
       diag1+= arr[i][i]
       diag2+= arr[i][arr.length-1-i]
   }
  // horizontal check
  let horz = arr.map(row=> row.reduce((a,b)=> a+b))

  //vertical check 
  let vert = arr.reduce((a,b)=>a.map((x,i)=> x+b[i]))

  //concatinating array with all the vlaues 
  let count= [...horz, ...vert, diag1, diag2]
  //checking array to see if there is a 3 or a 0 present. 
 if([...count].indexOf(3)!==-1){
     return 'X'
 } else if ([...count].indexOf(0)!==-1){
     return 'O'
 } else{
     return 'Draw'
 }

}

 console.log(match([
       ["O", "O", "O"],
      ["O", "X", "X"],
       ["E", "X", "X"]
     ]))
     //O