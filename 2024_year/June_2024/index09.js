// https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/description/

/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {

    // initialize result to 0
    let result = 0;

    // run for loop from index 0 to length of arr
    for (let i = 0; i < arr.length; i++) {

        // initialize currXor to ith element of arr
        let currXor = arr[i];

        // run for loop from index i+1 to length of arr
        for (let k = i + 1; k < arr.length; k++) {

            // do xor of currXor and arr[k] and assign back to currXor
            currXor ^= arr[k];

            // if currXor is equal to 0 then add k - i to result;
            if (currXor === 0) {
                result += (k - i);
            }
        }
    }

    // return result
    return result;
};

/*
Given an array of integers arr.

We want to select three indices i, j and k where (0 <= i < j <= k < arr.length).

Let's define a and b as follows:

a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]
b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]
Note that ^ denotes the bitwise-xor operation.

Return the number of triplets (i, j and k) Where a == b.
*/


/*
Example 1:

Input: arr = [2,3,1,6,7]
Output: 4
Explanation: The triplets are (0,1,2), (0,2,2), (2,3,4) and (2,4,4)

Example 2:

Input: arr = [1,1,1,1,1]
Output: 10
*/


/*
Constraints:

1 <= arr.length <= 300
1 <= arr[i] <= 108
*/