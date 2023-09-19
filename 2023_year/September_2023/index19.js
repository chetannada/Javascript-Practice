// https://leetcode.com/problems/orderly-queue/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function (s, k) {
    // initialize string s to str
    let str = s;

    // if k is equal to 1
    if (k === 1) {

        // initialize length len to length of string s
        let len = s.length;

        // loop through the 0 to length len
        for (let i = 0; i < len; i++) {

            // initialize firstChar to the first character of string s
            let firstChar = s[0];

            // copy all character of string s except first character using subString() and add first character at last and assign the string to s
            s = s.substring(1, len) + firstChar;

            // if string s is less than string str then assign string s to string str
            if (s < str) {
                str = s;
            }

        }

        // return string str
        return str;
    }

    // return sort value of string s by using split(), sort() and join()
    return s.split('').sort().join('');
};

/*
You are given a string s and an integer k. You can choose one of the first k letters of s and append it at the end of the string.

Return the lexicographically smallest string you could have after applying the mentioned step any number of moves.
*/

/*
Example 1:

Input: s = "cba", k = 1
Output: "acb"
Explanation: 
In the first move, we move the 1st character 'c' to the end, obtaining the string "bac".
In the second move, we move the 1st character 'b' to the end, obtaining the final result "acb".

Example 2:

Input: s = "baaca", k = 3
Output: "aaabc"
Explanation: 
In the first move, we move the 1st character 'b' to the end, obtaining the string "aacab".
In the second move, we move the 3rd character 'c' to the end, obtaining the final result "aaabc".
*/

/*
Constraints:

1 <= k <= s.length <= 1000
s consist of lowercase English letters.
*/