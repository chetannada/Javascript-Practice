// https://leetcode.com/problems/count-pairs-of-similar-strings/

/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {

    // initialize count to zero
    let count = 0;

    // initialize function checkSimilar with parameter word1 and word2
    function checkSimilar(word1, word2) {

        // initialize temp to zero
        let temp = 0;

        // loop through every character of word2
        for (let k = 0; k < word2.length; k++) {

            // if every character of word2 is not includes in word1 then increment temp and break the loop
            if (!word1.includes(word2.charAt(k))) {
                temp++;
                break;
            }
        }

        // if temp is equal to zero then return true
        if (temp == 0) {
            return true;
        }

        // return false
        return false;
    }

    // loop through every element of words from 0
    for (let i = 0; i < words.length; i++) {

        // loop through every element of words from i+1
        for (let j = i + 1; j < words.length; j++) {

            // call checkSimilar function with argument words[i] and words[j]
            let similar1 = checkSimilar(words[i], words[j])

            // call checkSimilar function with argument words[j] and words[i]
            let similar2 = checkSimilar(words[j], words[i])

            // if similar1 and similar2 both are true then increment count
            if (similar1 && similar2) {
                count++;
            }
        }
    }

    // return count
    return count;
};

/*
You are given a 0-indexed string array words.

Two strings are similar if they consist of the same characters.

For example, "abca" and "cba" are similar since both consist of characters 'a', 'b', and 'c'.
However, "abacba" and "bcfd" are not similar since they do not consist of the same characters.
Return the number of pairs (i, j) such that 0 <= i < j <= word.length - 1 and the two strings words[i] and words[j] are similar.
*/

/*
Example 1:
Input: words = ["aba","aabb","abcd","bac","aabc"]
Output: 2
Explanation: There are 2 pairs that satisfy the conditions:
- i = 0 and j = 1 : both words[0] and words[1] only consist of characters 'a' and 'b'. 
- i = 3 and j = 4 : both words[3] and words[4] only consist of characters 'a', 'b', and 'c'. 

Example 2:
Input: words = ["aabb","ab","ba"]
Output: 3
Explanation: There are 3 pairs that satisfy the conditions:
- i = 0 and j = 1 : both words[0] and words[1] only consist of characters 'a' and 'b'. 
- i = 0 and j = 2 : both words[0] and words[2] only consist of characters 'a' and 'b'.
- i = 1 and j = 2 : both words[1] and words[2] only consist of characters 'a' and 'b'.

Example 3:
Input: words = ["nba","cba","dba"]
Output: 0
Explanation: Since there does not exist any pair that satisfies the conditions, we return 0.
 
Constraints:
1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consist of only lowercase English letters.
*/