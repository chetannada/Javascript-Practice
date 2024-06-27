// https://leetcode.com/problems/maximum-69-number/description/

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {

    // convert num to string
    let nums = num.toString();

    // initialize result as empty string
    let result = "";

    // run for loop from index 0 to length of num
    for (let i = 0; i < nums.length; i++) {

        // if ith value of nums is equal to 6
        if (nums[i] === "6") {

            // add 9 in result
            result += "9";

            // add remaining value of nums in result and then break the loop
            result += nums.slice(i + 1);
            break;
        } else {

            // else add ith value of num in result
            result += nums[i]
        }
    }

    // convert result in Number and then return it
    return +result;
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
*/


/*
Constraints:

1 <= num <= 104
num consists of only 6 and 9 digits.
*/