
var playerName = prompt('Whats your name?')
player.innerHTML = `Player: ${playerName}`;

var gameScore = 0
score.innerHTML = `My Score = ${gameScore}`;

var words = [
    'dog',
    'cat',
    'flag'
];

//Pulling a random word from array 
var word = words[Math.floor(Math.random()*words.length)];
console.log(word)
var answerArray = [];
for(i=0; i<word.length; i++){
    answerArray[i]='_'
}
var remainingLetters = word.length;
const guessedLetters = [];
let tries = 0;

while (tries < (word.length+6) ) {
    alert(answerArray.join(' '));
    tries ++;

    var guess = prompt('Guess a letter or click Cancel to stop playing')
    console.log(guess)

    //creating array with al the letters that have been called 
    guessedLetters.push(guess)
    console.log(guessedLetters)

    if(guess === null){
        break;
    } else if(guess.length !== 1){
        alert("Please enter a single letter")
    } else{
        for(var j=0; j < word.length; j++){
            if(word[j] === guess.toLowerCase() && answerArray[j]!== guess.toLowerCase()){
                console.log(`iteration of the word: ${word[j]}`)
                answerArray[j] = guess;
                remainingLetters --;
                console.log(`Remaining Letters: ${remainingLetters}`)
        } 
    }
    if(tries>= (word.length+6)){
        alert('Sorry you lost')
        alert(`The word was ${word}`)
        break;
    } else {
        if(remainingLetters===0){
            alert('congrats you won')
            score ++;
            break;
        }
    }
}


alert('New Game')