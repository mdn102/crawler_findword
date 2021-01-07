// while(condition){
//     console.log(do something)
//     i++
// }

var sheeps = 0;
while(sheeps < 10){
    console.log(`I have counted ${sheeps} sheep!`);
    sheeps ++;
}
console.log('zzzz')

var number = 3;
while(number < 1000){
    console.log(number)
    number *=3;
}


let animals = ['dog', 'cat','fish'];
let awesome =[]
for(let i = 0; i<animals.length; i++){
    awesome.push(`Awesome ${animals[i]}`)
}
console.log(awesome)

let aplhabet = 'abcdefghijklmnopqrstuvwxyz'
let randomString = '';

while(randomString.length < 6){
    let random = Math.floor(Math.random()*aplhabet.length)
    randomString += aplhabet[random]
}
console.log(randomString)


//----------Changing variables [i] in a string to numbers------//

let string = 'javascript is awesome'
let newString = ''

for(let i = 0; i<string.length; i++){
     if(string[i]==='e'){
        newString+=3
    } else if(string[i]==='a'){
        newString+=4
    } else if(string[i]==='i'){
        newString+=1
    }else {
        newString+=string[i]
    }
}
console.log(newString)