/* 
Someone has attempted to censor my strings by replacing 
every vowel with a *, l*k* th*s. Luckily, I've been able to 
find the vowels that were removed.

Given a censored string and a string of the censored vowels, 
return the original uncensored string.
*/

// Example
/* uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo") 
➞ "Where did my vowels go?"
*/

// uncensor("abcd", "") ➞ "abcd"

// uncensor("*PP*RC*S*", "UEAE") ➞ "UPPERCASE"

function uncensor(str, vovel) {
    const arr = str.split('');
    const arrV = vovel.split('');

    const finalArr = arr.map(el => {
        if (el !== '*') {
            return el
        } else {
            for (let i of arrV) {
                el = i;
                arrV.shift(i)
                return el
            }
        }
    })
    return finalArr.join('')
}

console.log(uncensor('Wh*r* d*d my v*w*ls g*?', 'eeioeo'));
// Where did my vowels go?

console.log(uncensor("abcd", ""))
// ➞ "abcd"

console.log(uncensor("*PP*RC*S*", "UEAE"))
//  ➞ "UPPERCASE"