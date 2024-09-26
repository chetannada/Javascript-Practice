// https://leetcode.com/problems/di-string-match/description/


/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {

    // initialize result to empty array
    let result = [];

    // initialize two pointer i and j
    let i = 0, j = s.length;

    // run for of loop for string s
    for (let char of s) {

        // if char is equal to "D"
        if (char === "D") {

            // then push j in result and decrement j
            result.push(j);
            j--;
        } else {

            // else push i in result and increment i
            result.push(i);
            i++;
        }
    }

    // add increment value of i in result
    result.push(i);

    // return answer result
    return result;
};


/*
A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

s[i] == 'I' if perm[i] < perm[i + 1], and
s[i] == 'D' if perm[i] > perm[i + 1].
Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.
*/


/*
Example 1:

Input: s = "IDID"
Output: [0,4,1,3,2]
Example 2:

Input: s = "III"
Output: [0,1,2,3]
Example 3:

Input: s = "DDI"
Output: [3,2,0,1]
*/


/*
Constraints:

1 <= s.length <= 105
s[i] is either 'I' or 'D'.
*/