// https://leetcode.com/problems/sum-multiples/

/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let arr = []; // initilialize an empty array
    for(let i=1; i<=n; i++){ // loop through the 1 to n
        if((i % 3 === 0) || (i % 5 === 0) || (i % 7 === 0)){ // if i is divisible by 3 or 5 or 7 then push i into arr
            arr.push(i);
        }
    }
    let result = arr.reduce((a,b) => a + b, 0); // find sum of all element of arr and store into result
    return result; // return the result
};

/*
Example 1:
Input: n = 7
Output: 21
Explanation: Numbers in the range [1, 7] that are divisible by 3, 5, or 7 are 3, 5, 6, 7. The sum of these numbers is 21.

Example 2:
Input: n = 10
Output: 40
Explanation: Numbers in the range [1, 10] that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9, 10. The sum of these numbers is 40.

Example 3:
Input: n = 9
Output: 30
Explanation: Numbers in the range [1, 9] that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9. The sum of these numbers is 30.
*/