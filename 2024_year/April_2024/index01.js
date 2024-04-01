// https://leetcode.com/problems/count-alternating-subarrays/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var countAlternatingSubarrays = function (nums) {

    // initialize count for countingg alternating subarrays
    // two pointers i and j and n for length of array
    let count = 0, i = 0, j = 1, n = nums.length;

    // run for loop from index 1 to n
    for (; j < n; j++) {

        // if current element is not equal to previous element
        if (nums[j] !== nums[j - 1]) {

            // add j-i in count and initialize back to count
            count += (j - i);
        } else {

            // else change pointer i to j
            i = j;
        }
    }

    // return sum of count and n
    return count + n;
};

/*
You are given a 
binary array
 nums.

We call a 
subarray
 alternating if no two adjacent elements in the subarray have the same value.

Return the number of alternating subarrays in nums.


*/


/*
Example 1:

Input: nums = [0,1,1,1]

Output: 5

Explanation:

The following subarrays are alternating: [0], [1], [1], [1], and [0,1].

Example 2:

Input: nums = [1,0,1,0]

Output: 10

Explanation:

Every subarray of the array is alternating. There are 10 possible subarrays that we can choose.
*/


/*
Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
*/