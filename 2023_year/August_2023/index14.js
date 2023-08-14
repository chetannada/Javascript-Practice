// https://leetcode.com/problems/count-common-words-with-one-occurrence/

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {

    // initialize checkSameWord function with wordsArr and word parameter
    function checkSameWord(wordsArr, word) {

        // initialize wordCount to zero
        let wordCount = 0;

        // loop through the evey element of array wordsArr
        for (let i = 0; i < wordsArr.length; i++) {

            // if every element of wordsArr is equal to word
            if (wordsArr[i] == word) {

                // increment wordCount
                wordCount++;

                // if wordCount is eqault to 2 then return false
                if (wordCount == 2) {
                    return false;
                }
            }
        }
        return true; // return true;
    }

    // initialize count to zero
    let count = 0;

    // loop through the evey element of array words1
    for (let i = 0; i < words1.length; i++) {

        // loop through the evey element of array words2
        for (let j = 0; j < words2.length; j++) {

            // if every element of words1 is eqaul to every element of words2
            if (words1[i] == words2[j]) {

                // if checkSameWord function with argument array words1 and current element of words1 and checkSameWord function with argument array words2 and current element of words2 are true then increment count and break the second for loop
                if (checkSameWord(words1, words1[i]) && checkSameWord(words2, words2[j])) {
                    count++;
                    break;
                }
            }
        }
    }

    // return count
    return count;
};

/*
Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.
*/

/*
Example 1:
Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
Output: 2
Explanation:
- "leetcode" appears exactly once in each of the two arrays. We count this string.
- "amazing" appears exactly once in each of the two arrays. We count this string.
- "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
- "as" appears once in words1, but does not appear in words2. We do not count this string.
Thus, there are 2 strings that appear exactly once in each of the two arrays.

Example 2:
Input: words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
Output: 0
Explanation: There are no strings that appear in each of the two arrays.

Example 3:
Input: words1 = ["a","ab"], words2 = ["a","a","a","ab"]
Output: 1
Explanation: The only string that appears exactly once in each of the two arrays is "ab".
 
Constraints:
1 <= words1.length, words2.length <= 1000
1 <= words1[i].length, words2[j].length <= 30
words1[i] and words2[j] consists only of lowercase English letters.
*/