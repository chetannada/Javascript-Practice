// https://leetcode.com/problems/stamping-the-sequence/description/

/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
var movesToStamp = function (stamp, target) {
    const newTarget = new Array(target.length).fill('?').join('');
    const res = [];
    target = target.split('');

    while (target.join('') !== newTarget) {
        const ind = getIndex();
        if (ind === -1) return [];
        res.push(ind);
    }

    return res.reverse();

    function getIndex() {
        for (let i = 0; i < target.length; i++) {
            let match = 0, j = 0;

            for (; j < stamp.length; j++) {

                if (target[i + j] === stamp[j]) match++;
                else if (target[i + j] === '?') continue;
                else break;
            }
            if (j === stamp.length && match !== 0) {

                for (let k = 0; k < stamp.length; k++) {
                    target[i + k] = '?'
                }

                return i;
            }
        }

        return -1;
    }
};

/*
You are given two strings stamp and target. Initially, there is a string s of length target.length with all s[i] == '?'.

In one turn, you can place stamp over s and replace every letter in the s with the corresponding letter from stamp.

For example, if stamp = "abc" and target = "abcba", then s is "?????" initially. In one turn you can:
place stamp at index 0 of s to obtain "abc??",
place stamp at index 1 of s to obtain "?abc?", or
place stamp at index 2 of s to obtain "??abc".
Note that stamp must be fully contained in the boundaries of s in order to stamp (i.e., you cannot place stamp at index 3 of s).
We want to convert s to target using at most 10 * target.length turns.

Return an array of the index of the left-most letter being stamped at each turn. If we cannot obtain target from s within 10 * target.length turns, return an empty array.
*/


/*
Example 1:

Input: stamp = "abc", target = "ababc"
Output: [0,2]
Explanation: Initially s = "?????".
- Place stamp at index 0 to get "abc??".
- Place stamp at index 2 to get "ababc".
[1,0,2] would also be accepted as an answer, as well as some other answers.

Example 2:

Input: stamp = "abca", target = "aabcaca"
Output: [3,0,1]
Explanation: Initially s = "???????".
- Place stamp at index 3 to get "???abca".
- Place stamp at index 0 to get "abcabca".
- Place stamp at index 1 to get "aabcaca".
*/


/*
Constraints:

1 <= stamp.length <= target.length <= 1000
stamp and target consist of lowercase English letters.
*/