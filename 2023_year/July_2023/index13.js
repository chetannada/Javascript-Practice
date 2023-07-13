// https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/

/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
    let arr = []; // initialize an empty array arr

    for (let i = 0; i < strs.length; i++) { // loop through the every element of array strs
        let checkDigit = strs[i].match(/\d+/g); // check if there is digit in strs[i] using match
        if (checkDigit === null) { // if checkDigit is null then push length of strs[i] in arr
            arr.push(strs[i].length);
        } else { // else
            let checkString = checkDigit.join("").split(""); // find stirng in checkDigit
            if (checkString.length === strs[i].length) { // if length of checkString is same as strs[i]
                let max = Math.max(...checkDigit); // find max from checkDigit
                arr.push(max); // push max in arr
            } else { // else push length of strs[i] in arr
                arr.push(strs[i].length);
            }
        }
    }
    return Math.max(...arr); // return max value of arr
};


/*
The value of an alphanumeric string can be defined as:

The numeric representation of the string in base 10, if it comprises of digits only.
The length of the string, otherwise.
Given an array strs of alphanumeric strings, return the maximum value of any string in strs.
*/

/*
Example 1:
Input: strs = ["alic3","bob","3","4","00000"]
Output: 5
Explanation: 
- "alic3" consists of both letters and digits, so its value is its length, i.e. 5.
- "bob" consists only of letters, so its value is also its length, i.e. 3.
- "3" consists only of digits, so its value is its numeric equivalent, i.e. 3.
- "4" also consists only of digits, so its value is 4.
- "00000" consists only of digits, so its value is 0.
Hence, the maximum value is 5, of "alic3".

Example 2:
Input: strs = ["1","01","001","0001"]
Output: 1
Explanation: 
Each string in the array has value 1. Hence, we return 1.
 
Constraints:
1 <= strs.length <= 100
1 <= strs[i].length <= 9
strs[i] consists of only lowercase English letters and digits.
*/