// https://leetcode.com/problems/maximum-number-of-pairs-in-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let count = 0, j = 0, arr = []; // initialize count and j to zero and empty array arr
    let sort = nums.sort((a,b) => a - b); // sort the element of array nums
    let len = sort.length; // find the length of sort array
    for(let i=0; i<len; i++){ // loop through the element of array to len
        let first = sort[j]; // find first element of sort array
        let copyArr = sort.slice(j+1); // copy the array from sort array
        if(copyArr.includes(first)){ // if first includes in copyArr
            let index = copyArr.indexOf(first) // find index of first in copyArr
            sort.splice(index+1, 1); // remove index element from sort using splice
            sort.splice(j,1); // remove j index element from sort using splice
            count++; // increment count
        }else{
            j++; // else increment j
        }
    }
    arr.push(count); // push count value to arr
    arr.push(sort.length); // push sort length to arr
    return arr; // return arr
};

/*
Example 1:
Input: nums = [1,3,2,1,3,2,2]
Output: [3,1]
Explanation:
Form a pair with nums[0] and nums[3] and remove them from nums. Now, nums = [3,2,3,2,2].
Form a pair with nums[0] and nums[2] and remove them from nums. Now, nums = [2,2,2].
Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [2].
No more pairs can be formed. A total of 3 pairs have been formed, and there is 1 number leftover in nums.

Example 2:
Input: nums = [1,1]
Output: [1,0]
Explanation: Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [].
No more pairs can be formed. A total of 1 pair has been formed, and there are 0 numbers leftover in nums.

Example 3:
Input: nums = [0]
Output: [0,1]
Explanation: No pairs can be formed, and there is 1 number leftover in nums.
 

Constraints:
1 <= nums.length <= 100
0 <= nums[i] <= 100
*/