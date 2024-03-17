// https://leetcode.com/problems/find-the-sum-of-encrypted-integers/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function (nums) {

    // initialize sum for for finding sum of encypted integers
    let sum = 0;

    // run for loop to encrypt every element of array nums
    for (let i = 0; i < nums.length; i++) {

        // convert number to string
        let num = String(nums[i])

        // find maximum number from number num
        let max = Math.max(...num);

        // make largest digits using repeat()
        let largest = max.toString().repeat(num.length);

        // add larget into the sum
        sum += (Number(largest));
    }

    // return answer sum
    return sum;
};

/*
You are given an integer array nums containing positive integers. We define a function encrypt such that encrypt(x) replaces every digit in x with the largest digit in x. For example, encrypt(523) = 555 and encrypt(213) = 333.

Return the sum of encrypted elements.
*/


/*
Example 1:

Input: nums = [1,2,3]

Output: 6

Explanation: The encrypted elements are [1,2,3]. The sum of encrypted elements is 1 + 2 + 3 == 6.

Example 2:

Input: nums = [10,21,31]

Output: 66

Explanation: The encrypted elements are [11,22,33]. The sum of encrypted elements is 11 + 22 + 33 == 66.
*/


/*
Constraints:

1 <= nums.length <= 50
1 <= nums[i] <= 1000
*/