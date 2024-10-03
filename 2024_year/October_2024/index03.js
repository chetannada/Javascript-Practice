// https://leetcode.com/problems/make-sum-divisible-by-p/description/


/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, p) {

    // initialize total as total sum of all elements of nums
    let total = nums.reduce((a, b) => a + b, 0);

    // initialize rem as total modulo p
    let rem = total % p;

    // if rem is equal to 0 then return 0
    if (rem === 0) {
        return 0;
    }

    // initialize prefixMod as Hash map
    let prefixMod = new Map();

    // set 0 as key and -1 as value in prefixMod map
    prefixMod.set(0, -1);

    // initialize prefixSum as 0
    let prefixSum = 0;

    // initialize minLength as length of nums
    let minLength = nums.length;

    // run for loop from index 0 to length of nums
    for (let i = 0; i < nums.length; i++) {

        // add nums[i] in prefixSum
        prefixSum += nums[i];

        // initialize currentMod as prefixSum modulo p
        let currentMod = prefixSum % p;

        // initialize targetMod as (currentMod - rem + p) modulo p
        let targetMod = (currentMod - rem + p) % p;

        // if prefixMod has targetMod
        if (prefixMod.has(targetMod)) {

            // update minLength with minimum value between minLength and i - prefixMod.get(targetMod)
            minLength = Math.min(minLength, i - prefixMod.get(targetMod));
        }

        // set currentMod as key and i as value in predixMod map
        prefixMod.set(currentMod, i);
    }

    // if minLength as nums.length then return -1 otherwise minLength
    return minLength === nums.length ? - 1 : minLength;
};


/*
Given an array of positive integers nums, remove the smallest subarray (possibly empty) such that the sum of the remaining elements is divisible by p. It is not allowed to remove the whole array.

Return the length of the smallest subarray that you need to remove, or -1 if it's impossible.

A subarray is defined as a contiguous block of elements in the array.
*/


/*
Example 1:

Input: nums = [3,1,4,2], p = 6
Output: 1
Explanation: The sum of the elements in nums is 10, which is not divisible by 6. We can remove the subarray [4], and the sum of the remaining elements is 6, which is divisible by 6.
Example 2:

Input: nums = [6,3,5,2], p = 9
Output: 2
Explanation: We cannot remove a single element to get a sum divisible by 9. The best way is to remove the subarray [5,2], leaving us with [6,3] with sum 9.
Example 3:

Input: nums = [1,2,3], p = 3
Output: 0
Explanation: Here the sum is 6. which is already divisible by 3. Thus we do not need to remove anything.
*/


/*
Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= p <= 109
*/