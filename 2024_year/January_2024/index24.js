// https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/

/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
    let maxLength = [0];

    backTrack(arr, "", 0, maxLength);
    
    return maxLength[0];
};

function backTrack(arr, current, start, maxLength) {

    if (maxLength[0] < current.length) {
        maxLength[0] = current.length;
    }

    for (let i = start; i < arr.length; i++) {
        if (!isValid(current, arr[i])) {
            continue;
        }

        backTrack(arr, current + arr[i], i + 1, maxLength);
    }
}

function isValid(currentString, newString) {
    const charSet = new Set();

    for (let ch of newString) {
        if (charSet.has(ch)) {
            return false;
        }

        charSet.add(ch);

        if (currentString.includes(ch)) {
            return false;
        }
    }

    return true;
}

/*
You are given an array of strings arr. A string s is formed by the concatenation of a subsequence of arr that has unique characters.

Return the maximum possible length of s.

A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
*/


/*
Example 1:

Input: arr = ["un","iq","ue"]
Output: 4
Explanation: All the valid concatenations are:
- ""
- "un"
- "iq"
- "ue"
- "uniq" ("un" + "iq")
- "ique" ("iq" + "ue")
Maximum length is 4.

Example 2:

Input: arr = ["cha","r","act","ers"]
Output: 6
Explanation: Possible longest valid concatenations are "chaers" ("cha" + "ers") and "acters" ("act" + "ers").

Example 3:

Input: arr = ["abcdefghijklmnopqrstuvwxyz"]
Output: 26
Explanation: The only string in arr has all 26 characters.
*/


/*
Constraints:

1 <= arr.length <= 16
1 <= arr[i].length <= 26
arr[i] contains only lowercase English letters.
*/