// https://leetcode.com/problems/number-of-good-pairs/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {

    // initialize result to be zero
    let result = 0;

    // sort the array nums
    nums.sort((a, b) => a - b);

    // loop through every element of array nums
    for (let i = 0; i < nums.length; i++) {

        // find the last index of current element of array nums using lastIndexOf()
        let lastIndex = nums.lastIndexOf(nums[i]);

        // find the difference between lastIndex and i and add 1
        let diff = lastIndex - i + 1;

        // find goodPair using n * (n - 1) / 2 formula
        let goodPair = (diff * (diff - 1)) / 2;

        // add goodpair to result
        result += goodPair;

        // make i as lastIndex
        i = lastIndex;
    }

    // return the result
    return result;
};

/*

*/


/*

*/


/*

*/