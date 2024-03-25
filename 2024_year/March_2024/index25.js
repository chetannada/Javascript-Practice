// https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/description/

/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {

    // initialize n for length of array and count array for all 
    // 26 alphabetic letters and max for 0 
    let n = s.length, count = Array(26).fill(0), max = 0;

    // loop through index 0 to n
    // initilize tow pointer i and j to keep track of current sliding window
    for (let j = 0, i = 0; j < n; j++) {

        // increase the freqency of current letter in count array
        count[s.charCodeAt(j) - 97]++;

        // run while loop until freqency of current letter in count array
        // is greater then 2
        while (count[s.charCodeAt(j) - 97] > 2) {

            // decremet freqency of ith letter in count array
            count[s.charCodeAt(i) - 97]--;

            // increment i to keep track of current sliding window
            i++;
        }

        // record the maximum window length
        max = Math.max(max, j + 1 - i);
    }

    // return answer max
    return max;
};

/*
Given a string s, return the maximum length of a 
substring
 such that it contains at most two occurrences of each character.
*/


/*
Example 1:

Input: s = "bcbbbcba"

Output: 4

Explanation:

The following substring has a length of 4 and contains at most two occurrences of each character: "bcbbbcba".

Example 2:

Input: s = "aaaa"

Output: 2

Explanation:

The following substring has a length of 2 and contains at most two occurrences of each character: "aaaa".
*/


/*
Constraints:

2 <= s.length <= 100
s consists only of lowercase English letters.
*/