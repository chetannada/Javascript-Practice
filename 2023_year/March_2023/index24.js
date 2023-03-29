// https://leetcode.com/problems/decode-xored-array/

/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let result = [first]; // initialize result array with first value
    for(let i=0; i<encoded.length; i++){ // iterate through the array
        let num = result[i] ^ encoded[i]; // used ^ operator
        result.push(num); // push the num in result array
    }
    return result;
};

/*
Example 1:

Input: encoded = [1,2,3], first = 1
Output: [1,0,2,1]
Explanation: If arr = [1,0,2,1], then first = 1 and encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]
Example 2:

Input: encoded = [6,2,7,3], first = 4
Output: [4,2,0,7,4]
*/