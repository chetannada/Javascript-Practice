// https://leetcode.com/problems/delete-operation-for-two-strings/submissions/1116436070/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const wordLen1 = word1.length;
    const wordLen2 = word2.length;

    const dp = Array(wordLen1 + 1).fill('').map(() => Array(wordLen2 + 1).fill(0));

    for (let index = 1; index <= wordLen1; index++) {
        for (let j = 1; j <= wordLen2; j++) {

            dp[index][j] = word1[index - 1] === word2[j - 1]
                ? dp[index - 1][j - 1] + 1
                : Math.max(dp[index - 1][j], dp[index][j - 1]);

        }
    }

    return wordLen1 + wordLen2 - 2 * dp[wordLen1][wordLen2];
};

/*
Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same.

In one step, you can delete exactly one character in either string.
*/


/*
Example 1:

Input: word1 = "sea", word2 = "eat"
Output: 2
Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

Example 2:

Input: word1 = "leetcode", word2 = "etco"
Output: 4
*/


/*
Constraints:

1 <= word1.length, word2.length <= 500
word1 and word2 consist of only lowercase English letters.
*/