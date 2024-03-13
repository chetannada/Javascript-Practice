// https://leetcode.com/problems/make-array-empty/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var countOperationsToEmptyArray = function (nums) {

    // initialize map object
    let map = new Map();

    // initialize n is eqaul to length of nums and prev is equal to 0
    let n = nums.length, prev = 0;

    // initialize ans to n
    let ans = n;

    // run for loop from 0 to n
    for (let i = 0; i < n; i++) {

        // set all element with index as key value pair in map
        map.set(nums[i], i);
    }

    // sort the element of array nums in ascending order
    nums.sort((a, b) => a - b);

    // run for loop and get the value of nums[i] in map and assign to prev
    for (let i = 0; i < n; prev = map.get(nums[i++])) {

        // if value of nums[i] in map is less than prev
        if (map.get(nums[i]) < prev) {

            // subtract n with i and add it in ans and assign back to it
            ans += n - i;
        }
    }

    // return answer ans
    return ans;
};

/*
You are given an integer array nums containing distinct numbers, and you can perform the following operations until the array is empty:

If the first element has the smallest value, remove it
Otherwise, put the first element at the end of the array.
Return an integer denoting the number of operations it takes to make nums empty.
*/


/*
Example 1:

Input: nums = [3,4,-1]
Output: 5
Operation	Array
1	[4, -1, 3]
2	[-1, 3, 4]
3	[3, 4]
4	[4]
5	[]

Example 2:

Input: nums = [1,2,4,3]
Output: 5
Operation	Array
1	[2, 4, 3]
2	[4, 3]
3	[3, 4]
4	[4]
5	[]

Example 3:

Input: nums = [1,2,3]
Output: 3
Operation	Array
1	[2, 3]
2	[3]
3	[]

*/


/*
Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
All values in nums are distinct.
*/