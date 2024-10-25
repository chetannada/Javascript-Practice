// https://leetcode.com/problems/longest-substring-without-repeating-characters/


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    // initialize set for tracking repeating characters
    let set = new Set();

    // initialize left, right and max as 0
    let left = 0, right = 0, max = 0;

    // run while loop until left is less than s.length
    while (left < s.length) {

        // if set contains s[left]
        if (set.has(s[left])) {

            // delete s[right] from set
            set.delete(s[right]);

            // increase right
            right++;
        } else {

            // else add s[left] in set
            set.add(s[left]);

            // increase left
            left++;
        }

        // update max with maximum value between max and set size
        max = Math.max(max, set.size);
    }

    // return final answer max
    return max;
};



/*
Given a string s, find the length of the longest 
substring
 without repeating characters.
*/


/*
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/


/*
Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/