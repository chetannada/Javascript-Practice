// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/description/

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max =[]; // initialize an empty array
    for(let i=0; i<sentences.length; i++){
        let count = sentences[i].split(' ').length; // convert string to an array and find length of an array
        max.push(count); // add the count to an array
    }
    return Math.max(...max); // return maximum value from an array
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));  // 6

/*
Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
Output: 6
Explanation: 
- The first sentence, "alice and bob love leetcode", has 5 words in total.
- The second sentence, "i think so too", has 4 words in total.
- The third sentence, "this is great thanks very much", has 6 words in total.
Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.
*/