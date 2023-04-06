// https://leetcode.com/problems/count-the-number-of-consistent-strings/

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0; // initialize count to zero
    for(let i= 0; i< words.length; i++){ // loop through every element of array
        let k = 0; // initialize k to zero for true count
        for(let j= 0; j < words[i].length; j++){ // loop through string of element of array
            if(allowed.includes(words[i][j])){ // check if all character of words include in allowed string
                k++; // if true then count k
                if(k == words[i].length){ // if k equal to length of words string then count
                    count++;
                }
            }
        }
    }
    return count++; // return count
};

/*
Example 1:

Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.


Example 2:

Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.


Example 3:

Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
Output: 4
Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
*/