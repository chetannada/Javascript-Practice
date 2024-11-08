// https://leetcode.com/problems/word-break/description/


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {

    // initialize set for array wordDict to check every string value in set
    let set = new Set(wordDict);

    // initialize a DP array of size s.length + 1 with all false values
    let dp = new Array(s.length + 1).fill(false);

    // assign first value of dp as true
    dp[0] = true;

    // run for loop from index 1 to s.length inclusive
    for (let end = 1; end <= s.length; end++) {

        // run for loop from 0 to end positon and check all posible start position
        for (let start = 0; start < end; start++) {

            // find substring from start to end
            let word = s.slice(start, end);

            // if start index of dp is true and word is present in set
            if (dp[start] === true && set.has(word)) {

                // make end index of dp is true
                dp[end] = true;

                // no need to check start position so break the inner for loop
                break;
            }
        }
    }

    // return the s.length index of dp value as final answer
    return dp[s.length];
};


/*
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

*/



/*
Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.

Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
*/



/*
Constraints:

1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20
s and wordDict[i] consist of only lowercase English letters.
All the strings of wordDict are unique.
*/