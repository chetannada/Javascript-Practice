// https://leetcode.com/problems/decompress-run-length-encoded-list/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let result = []; // initialize an empty array

    for(let i=0; i<nums.length; i++){ // loop through an element of an array
        let freq = nums[i], val = nums[i+1]; // take first and second value of an array
        for(let j=1; j<=freq; j++){ //loop through the first value
            result.push(val); // add the second value to an array
        }
        i++; // increment i so it becomes even
    }
    return result; // return the result of an array
};

console.log(decompressRLElist([1,2,3,4])); // [2,4,4,4]
/*
Input: nums = [1,2,3,4]
Output: [2,4,4,4]
Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
At the end the concatenation [2] + [4,4,4] is [2,4,4,4].
*/