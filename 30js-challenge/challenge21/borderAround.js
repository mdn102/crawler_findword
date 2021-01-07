/* 
Given a rectangular matrix of characters, add a border of 
asterisks(*) to it.
*/

// Example

// For

// picture = ["abc",
//            "ded"]
// the output should be

// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]


function border(pic) {
    //establlishing the length of all the strings once all astresis are presemt
    const count = pic[0].length + 2;
    //will utzlize string methods of concat to add astresis
    let arr = [];

    for (let i of pic) {
        let string = i.concat('*')
        return string
        //pushing two into array
        arr.push('*'.concat(string))
    }
    return arr

}

console.log(border["abc",
                    "ded"]);
