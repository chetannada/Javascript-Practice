// https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    let count = 0; // initialize count to zero
    nums.sort((a, b) => a - b); // sort the array nums
    let len = nums.length; // initialize len to nums length

    for (let i = 0; i < len; i++) { // loop through the every element of array
        let filterArr = nums.filter(item => item !== 0); // initialize filterArr for fitler nums element that not equal to zero
        if (filterArr.length !== 0) { // if filterArr length not equal to zero
            let min = Math.min(...filterArr); // initialize min from filterArr
            nums = filterArr.map((item) => item - min); // map the filterArr and subtract item with min
            count++; // increment count
        }
    }
    return count;
};

/*
You are given a non-negative integer array nums. In one operation, you must:

Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
Subtract x from every positive element in nums.
Return the minimum number of operations to make every element in nums equal to 0.
*/


/*
Example 1:

Input: nums = [1,5,0,3,5]
Output: 3
Explanation:
In the first operation, choose x = 1. Now, nums = [0,4,0,2,4].
In the second operation, choose x = 2. Now, nums = [0,2,0,0,2].
In the third operation, choose x = 2. Now, nums = [0,0,0,0,0].
Example 2:

Input: nums = [0]
Output: 0
Explanation: Each element in nums is already 0 so no operations are needed.
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 100
*/