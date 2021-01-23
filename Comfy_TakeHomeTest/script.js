// function search()
// {
//     var data=document.getElementById('txt').value;
//     var temp=data;
//     var words=new Array();
//     words=temp.split(" ");
//     var uniqueWords=new Array();
//     var count=new Array();
//
//
//     for (var i = 0; i < words.length; i++) {
//         //var count=0;
//         var f=0;
//         for(j=0;j<uniqueWords.length;j++){
//             if(words[i]==uniqueWords[j]){
//                 count[j]=count[j]+1;
//                 //uniqueWords[j]=words[i];
//                 f=1;
//             }
//         }
//         if(f==0){
//             count[i]=1;
//             uniqueWords[i]=words[i];
//         }
//     }
//     for ( i = 0; i < uniqueWords.length; i++) {
//         if (typeof uniqueWords[i] !== 'undefined')
//             console.log("count of "+uniqueWords[i]+" - "+count[i]);
//     }
// }

// var context = "Anyway, I keep picturing all these little kids playing some game in this big field of rye and all. Thousands of little kids, and nobody's around - nobody big, I mean - except me. And I'm standing on the edge of some crazy cliff. What I have to do, I have to catch everybody if they start to go over the cliff - I mean if they're running and they don't look where they're going I have to come out from somewhere and catch them. That's all I do all day. I'd just be the catcher in the rye and all. I know it's crazy, but that's the only thing I'd really like to be. ";
var context = document.getElementById('txt').value;
var result = {}; // store word as hashtable to make lookup faster.
var wordsList = context.split(" "); // convert string to array of words.

for (var i = 0; i < wordsList.length; i++) {
    // Check if the word is empty or exist.
    if (wordsList[i] === " ") continue;


    // ignore abbreviations, hyphenation, and most other punctuation.
    var word = wordsList[i].toLocaleLowerCase().replace(",", "")
                                               .replace(".", "")
                                               .replace("-", "")
                                               .replace("?", "")
                                               .replace(":", "")
                                               .replace("!", "");

    // check if the word exist, if it does then increase the count. else add it to the list.
    if (result[word]) {
        result[word] += 1;
    }
    else {
        result[word] = 1;
    }
}

// go through the hashtable to create output.
var outputHtml = "";
for (var word in result) {
    outputHtml += "<li>" + word + " = " + result[word] + "</li>";
}

// add the output of the list to existing element
document.getElementsByTagName("ul")[0].innerHTML = outputHtml;
