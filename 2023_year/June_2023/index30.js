// https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    nums.sort((a,b) => b - a); // sort the nums array in decreasing order
    let arr = []; // initialize empty array
    if(nums.length <= 2){ // if nums length is less than or equal to 2
        if(nums.length <= 1){
            arr.push([nums[0]]); // then push first element of index 0 of nums array in arr
        }else{
            if(nums[0] === nums[1]){
arr.push(...nums.slice(0)); // then push all elements from index 0 of nums array in arr
            }else{
                arr.push([nums[0]]); // then push first element of index 0 of nums array in arr
            }
        }
    }else{ // else
        for (let i =0; i<nums.length; i++){ // loop through the every element of array nums
        let elements = nums.slice(0, i+1); // initialize elements which has copy of nums up to index i+1 (i+1 is not included)
        let elementsMax = elements.reduce((a,b) => a + b); // initialize elementsMax which is sums of all array elements
        let remaining = nums.slice(i+1); // initialize remaining which has copy of nums from index i+1
        let remainingMax = remaining.reduce((a,b) => a + b); // initialize remainingMax which is sums of all array remaining
        if(elementsMax > remainingMax){ // if elementsMax is greater then remainingMax then push all elements of array into arr then break the loop
            arr.push(...elements);
            break;
        }
    }
    }
    return arr; // return the arr
};

/*
Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the non included elements in such subsequence. 

If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions, return the subsequence with the maximum total sum of all its elements. A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array. 

Note that the solution with the given constraints is guaranteed to be unique. Also return the answer sorted in non-increasing order.
*/

/*
Example 1:
Input: nums = [4,3,10,9,8]
Output: [10,9] 
Explanation: The subsequences [10,9] and [10,8] are minimal such that the sum of their elements is strictly greater than the sum of elements not included. However, the subsequence [10,9] has the maximum total sum of its elements. 

Example 2:
Input: nums = [4,4,7,6,7]
Output: [7,7,6] 
Explanation: The subsequence [7,7] has the sum of its elements equal to 14 which is not strictly greater than the sum of elements not included (14 = 4 + 4 + 6). Therefore, the subsequence [7,6,7] is the minimal satisfying the conditions. Note the subsequence has to be returned in non-decreasing order.  
 
Constraints:
1 <= nums.length <= 500
1 <= nums[i] <= 100
*/