// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {

    // just copy the nums array into arr then sort it
    // in ascending orderusing sort()
    let arr = [...nums];
    arr.sort((a, b) => a - b);

    // initialize hash map method
    let map = new Map();

    // loop through the every element of array arr
    for (let i = 0; i < arr.length; i++) {

        // find the first index of current element
        let index = arr.indexOf(arr[i]);

        // store current element and index in hashmap
        map.set(arr[i], index);
    }

    // loop through the every element of array nums
    for (let i = 0; i < nums.length; i++) {

        // get the value of current element of nums in map
        // and assign to back to current element of nums
        nums[i] = map.get(nums[i]);
    }

    // return answer nums
    return nums;
};

/*
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.
*/


/*
Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

Example 2:

Input: nums = [6,5,4,8]
Output: [2,1,0,3]

Example 3:

Input: nums = [7,7,7,7]
Output: [0,0,0,0]
 
*/


/*
Constraints:

2 <= nums.length <= 500
0 <= nums[i] <= 100
*/