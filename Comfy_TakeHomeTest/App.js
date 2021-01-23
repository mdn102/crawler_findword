function countWords(str) {
	const wordCounts = new Map()
	str.split(' ').forEach(word => {
		const currentWordCount = wordCounts.get(word) || 0
		wordCounts.set(word, currentWordCount + 1)
	})

	/* Reproduce your output */
	const resultWords = [...wordCounts.keys()]
	const resultCount = [...wordCounts.values()]
	console.log('resultWords: ' + resultWords);
	console.log('resultCount: ' + resultCount);

	return wordCounts
}

// function countWords(str) {
//   const wordCounts = {}
//   str.split(' ').forEach(function(word) {
//     const currentWordCount = wordCounts[word] || 0
//     wordCounts[word] = currentWordCount+1
//   })

//   /* Reproduce your output */
//   const resultWords = Object.keys(wordCounts)
//   const resultCount = resultWords.map(function(word) { return wordCounts[word] })
//   console.log('resultWords: ' + resultWords);
//   console.log('resultCount: ' + resultCount);

//   return wordCounts
// }

let str = "Anyway, I keep picturing all these little kids playing some game in this big field of rye and all. Thousands of little kids, and nobody's around - nobody big, I mean - except me. And I'm standing on the edge of some crazy cliff. What I have to do, I have to catch everybody if they start to go over the cliff - I mean if they're running and they don't look where they're going I have to come out from somewhere and catch them. That's all I do all day. I'd just be the catcher in the rye and all. I know it's crazy, but that's the only thing I'd really like to be. "
countWords(str);
