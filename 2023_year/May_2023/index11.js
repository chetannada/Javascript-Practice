// https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/

/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let count = 0; // initialize count to zero
    let vowel = "aeiou"; // initialize vowel to "aeiou"
    for(let i=left; i<=right; i++){ // loop through the left to right
        if(vowel.includes(words[i][0]) && vowel.includes(words[i][words[i].length - 1])){ // if first and last character in words[i] is vowel then increment count
            count++;
        }
    }
    return count; // return count
};

/*
Example 1:
Input: words = ["are","amy","u"], left = 0, right = 2
Output: 2
Explanation: 
- "are" is a vowel string because it starts with 'a' and ends with 'e'.
- "amy" is not a vowel string because it does not end with a vowel.
- "u" is a vowel string because it starts with 'u' and ends with 'u'.
The number of vowel strings in the mentioned range is 2.

Example 2:
Input: words = ["hey","aeo","mu","ooo","artro"], left = 1, right = 4
Output: 3
Explanation: 
- "aeo" is a vowel string because it starts with 'a' and ends with 'o'.
- "mu" is not a vowel string because it does not start with a vowel.
- "ooo" is a vowel string because it starts with 'o' and ends with 'o'.
- "artro" is a vowel string because it starts with 'a' and ends with 'o'.
The number of vowel strings in the mentioned range is 3.
*/