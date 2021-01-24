// Return the Time Saved by Speeding
// One cause for speeding is the desire to shorten the time spent traveling. While in long distance trips speeding does save an appreciable amount of time, the same cannot be said about short distance trips.

// Create a function that calculates the amount of time saved (in minutes) were you traveling with an average speed that is above the speed-limit as compared to traveling with an average speed exactly at the speed-limit.

// Examples
// // The paramater's format is as follows:
// // (speed limit, avg speed, distance traveled at avg speed)

// timeSaved(80, 90, 40) ➞ 3.3

// timeSaved(80, 90, 4000) ➞ 333.3

// timeSaved(80, 100, 40 ) ➞ 6.0

// timeSaved(80, 100, 10) ➞ 1.5

function timeSaved(lim, avg, d) {
	lim = lim/60
	avg=avg/60
 	let diff =  (d/lim) - (d/avg)
	if(diff%1===0){
		return diff
	} else {
		return Number(diff.toFixed(1))
	}
}

console.log(timeSaved(80, 90, 40))
//3.3