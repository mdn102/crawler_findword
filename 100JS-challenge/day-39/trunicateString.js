// Create a function that takes a string (the string to truncate) and a number (the maximum length of the truncated string) as arguments and returns the truncated string at the given length.

// Examples
// truncate("Lorem ipsum dolor sit amet.", 11) ➞ "Lorem ipsum"

// truncate("Lorem ipsum dolor sit amet.", 16) ➞ "Lorem ipsum"

// truncate("Lorem ipsum dolor sit amet.", 17) ➞ "Lorem ipsum dolor"
function truncate(string, length) {
	let total=[]
	let stringTwo=string.slice(0,length)
    string=string.split(' ')
	stringTwo = stringTwo.split(' ')
	for(let i=0; i<string.length; i++){
		if(string[i]===stringTwo[i]){
			total.push(string[i])
		}
	}
	return total.join(' ')
	
	
}

console.log(truncate("Lorem ipsum dolor sit amet.", 11))
//Lorem ipsum