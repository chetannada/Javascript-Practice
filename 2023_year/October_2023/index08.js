// https://leetcode.com/problems/minimum-string-length-after-removing-substrings/description/

/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {

    // initialize len to length of string s
    let len = s.length;

    // initialize function remove with parameter str
    function remove(str) {

        // find index of str in string s using indexOf()
        let index = s.indexOf(str);

        // convert string to array using split()
        let arr = s.split('');

        // remove 2 element from array using splice()
        arr.splice(index, 2);

        // convert array arr to string using join() and return it
        return arr.join('')
    }

    // continue the loop up to len
    for (let i = 0; i < len; i++) {

        // if string s includes 'AB' then invoke the function remove() with 'AB' as argument and assign it to s
        if (s.includes('AB')) {
            s = remove('AB')
        }
        // else if string s includes 'CD' then invoke the function remove() with 'CD' as argument and assign it to s
        else if (s.includes('CD')) {
            s = remove('CD')
        }
        // else break the loop
        else {
            break;
        }
    }

    // return the length of string s
    return s.length;
};

/*
You are given a string s consisting only of uppercase English letters.

You can apply some operations to this string where, in one operation, you can remove any occurrence of one of the substrings "AB" or "CD" from s.

Return the minimum possible length of the resulting string that you can obtain.

Note that the string concatenates after removing the substring and could produce new "AB" or "CD" substrings.
*/


/*
Example 1:

Input: s = "ABFCACDB"
Output: 2
Explanation: We can do the following operations:
- Remove the substring "ABFCACDB", so s = "FCACDB".
- Remove the substring "FCACDB", so s = "FCAB".
- Remove the substring "FCAB", so s = "FC".
So the resulting length of the string is 2.
It can be shown that it is the minimum length that we can obtain.

Example 2:

Input: s = "ACBBD"
Output: 5
Explanation: We cannot do any operations on the string so the length remains the same.
*/


/*
Constraints:

1 <= s.length <= 100
s consists only of uppercase English letters.
*/