// https://leetcode.com/problems/merge-strings-alternately/description/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let str= ""; // initialize an empty string
    let max = Math.max(word1.length, word2.length); // find max length from two word
    for(let i=0; i<max; i++){ // loop through the max length
        if(word1.length > word2.length){ // check condition if word1 length is greater than word2
            if(word2[i] !== undefined){ // if any character of word2 is not undefined
                str += word1[i] + word2[i]; // then add first character of word1 and word2
            }else{
                str += word1[i]; // otherwise add remaining character of word1
            }
        }else{ // same condition as above
            if(word1[i] !== undefined){
                str += word1[i] + word2[i];
            }else{
                str += word2[i];
            }
        }
    }
    return str; // return string
};

/*
Example 1:
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

Example 2:
Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s

Example 3:
Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
*/