// https://leetcode.com/problems/array-partition/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b) => a-b) // sort the nums array using sort()
    let sum = 0; // intialize a sum to zero
    for(let i = 0; i<nums.length; i+=2){ // loop through every element of array of nums and increment i to 2 for odd iteration
        sum += nums[i]; // add element of odd nums element to sum
    }
    return sum; // return sum
};

/*
Example 1:
Input: nums = [1,4,3,2]
Output: 4
Explanation: All possible pairings (ignoring the ordering of elements) are:
1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
So the maximum possible sum is 4.

Example 2:
Input: nums = [6,2,6,5,1,2]
Output: 9
Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.
 
Constraints:
1 <= n <= 104
nums.length == 2 * n
-104 <= nums[i] <= 104
*/