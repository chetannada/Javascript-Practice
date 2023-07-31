// https://leetcode.com/problems/maximum-69-number/

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    let maxArr = [num]; // initialize array maxArr with num as value

    let numArr = num.toString().split(''); // initialize numArr as array of num

    for (let i = 0; i < numArr.length; i++) { // loop through the every element of array numArr

        if (numArr[i] == 6) { // if current element of numArr is 6
            let arr = [...numArr] // copy numArr into arr
            arr.splice(i, 1, 9); // make current element arr to 9
            maxArr.push(arr.join('')); // convert arr to string and push into maxArr and break the loop
            break;
        }
    }

    return Math.max(...maxArr); // return max value from maxArr
};

/*
You are given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
*/

/*
Example 1:
Input: num = 9669
Output: 9969
Explanation: 
Changing the first digit results in 6669.
Changing the second digit results in 9969.
Changing the third digit results in 9699.
Changing the fourth digit results in 9666.
The maximum number is 9969.

Example 2:
Input: num = 9996
Output: 9999
Explanation: Changing the last digit 6 to 9 results in the maximum number.

Example 3:
Input: num = 9999
Output: 9999
Explanation: It is better not to apply any change.
 
Constraints:
1 <= num <= 104
num consists of only 6 and 9 digits.
*/