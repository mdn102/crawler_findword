// Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.

// Examples
// afterNYears({
//   "Joel" : 32,
//   "Fred" : 44,
//   "Reginald" : 65,
//   "Susan" : 33,
//   "Julian" : 13
// }, 1) ➞ {
//   "Joel" : 33,
//   "Fred" : 45,
//   "Reginald" : 66,
//   "Susan" : 34,
//   "Julian" : 14
// }

// afterNYears({
//   "Baby" : 2,
//   "Child" : 8,
//   "Teenager" : 15,
//   "Adult" : 25,
//   "Elderly" : 71
// }, 19) ➞ {
//   "Baby" : 21,
//   "Child" : 27,
//   "Teenager" : 34,
//   "Adult" : 44,
//   "Elderly" : 90
// }

// afterNYears({
//   "Genie" : 1000,
//   "Joe" : 40
// }, 5) ➞ {
//   "Genie" : 1005,
//   "Joe" : 45
// }
// Assume that everyone is immortal (it would be a bit grim if I told you to 
//     remove names once they reached 75).
// n should be a positive number because last time I checked, people don't
//  tend to age backwards. Therefore, use the absolute value of n.
function afterYears(names, n){
    //iterrating throgh the object using a loop 
    //ech i represents the value on the name 
    for(let i in names){
        //Putting it in math absolute for negative numbers 
        names[i]=names[i]+Math.abs(n)
    }
    return names 
}

console.log(afterYears({"Genie" : 1000,"Joe" : 40}, 5))