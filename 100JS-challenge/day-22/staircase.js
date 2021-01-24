// Consider a staircase of size :

//    #
//   ##
//  ###
// ####
// Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .

// Function Description

// Complete the staircase function in the editor below. It should print a staircase as described above.

// staircase has the following parameter(s):

// n: an integer
// Input Format

// A single integer, , denoting the size of the staircase.

function staiCase(n){
    for(let i=1; i<=n; i++){
        console.log(' '.repeat(n-i)+'#'.repeat(i))
    }
}

staiCase(6)
//      #
//     ##
//    ###
//   ####
//  #####
// ######