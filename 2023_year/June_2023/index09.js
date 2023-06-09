// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let count = 0; // initialize count to zero
    let ans = num; // initialize ans to num
    while(ans >= 0){ // loop the ans if anwer is greater than or equal to zero
        if(ans === 0){ // if ans is zero then break while loop
            break;
        }
        if(ans % 2 === 0){ // if ans is even then divide it by 2 and increment count
            ans /= 2;
            count++;
        }else{ // if ans is odd then decrement ans by -1 and increment count
            ans -= 1;
            count++;
        }
    }
    return count; // return the count
};


/*
Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
*/


/*
Example 1:
Input: num = 14
Output: 6
Explanation: 
Step 1) 14 is even; divide by 2 and obtain 7. 
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3. 
Step 4) 3 is odd; subtract 1 and obtain 2. 
Step 5) 2 is even; divide by 2 and obtain 1. 
Step 6) 1 is odd; subtract 1 and obtain 0.

Example 2:
Input: num = 8
Output: 4
Explanation: 
Step 1) 8 is even; divide by 2 and obtain 4. 
Step 2) 4 is even; divide by 2 and obtain 2. 
Step 3) 2 is even; divide by 2 and obtain 1. 
Step 4) 1 is odd; subtract 1 and obtain 0.

Example 3:
Input: num = 123
Output: 12
*/