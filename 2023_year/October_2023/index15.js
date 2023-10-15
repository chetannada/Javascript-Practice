// https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/description/

/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {

    let arr = [];
    let str = '';

    // find remainder by dividing length of string s by k
    let rem = s.length % k;

    // loop through every character of string s
    for (let i = 0; i < s.length; i++) {

        // add every character of string s in string str
        str += s[i];

        // if length of string str is equal to k then push str in array arr and make string str empty
        if (str.length === k) {
            arr.push(str);
            str = '';
        }

        // if i is equal to s.length - 1 and rem is not equal to 0 and str.length is not equal to k
        if (i === s.length - 1 && rem !== 0 && str.length !== k) {

            // add str and new array of length k - rem and fill with fill and make the string using join()
            let tempStr = str + Array(k - rem).fill(fill).join('');

            // push tempStr in array arr
            arr.push(tempStr);
        }
    }

    // return array arr
    return arr;
};

/*
A string s can be partitioned into groups of size k using the following procedure:

The first group consists of the first k characters of the string, the second group consists of the next k characters of the string, and so on. Each character can be a part of exactly one group.
For the last group, if the string does not have k characters remaining, a character fill is used to complete the group.
Note that the partition is done so that after removing the fill character from the last group (if it exists) and concatenating all the groups in order, the resultant string should be s.

Given the string s, the size of each group k and the character fill, return a string array denoting the composition of every group s has been divided into, using the above procedure.
*/


/*
Example 1:

Input: s = "abcdefghi", k = 3, fill = "x"
Output: ["abc","def","ghi"]
Explanation:
The first 3 characters "abc" form the first group.
The next 3 characters "def" form the second group.
The last 3 characters "ghi" form the third group.
Since all groups can be completely filled by characters from the string, we do not need to use fill.
Thus, the groups formed are "abc", "def", and "ghi".

Example 2:

Input: s = "abcdefghij", k = 3, fill = "x"
Output: ["abc","def","ghi","jxx"]
Explanation:
Similar to the previous example, we are forming the first three groups "abc", "def", and "ghi".
For the last group, we can only use the character 'j' from the string. To complete this group, we add 'x' twice.
Thus, the 4 groups formed are "abc", "def", "ghi", and "jxx".
 
*/


/*
Constraints:

1 <= s.length <= 100
s consists of lowercase English letters only.
1 <= k <= 100
fill is a lowercase English letter.
*/