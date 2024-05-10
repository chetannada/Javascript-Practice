// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/description/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {

    // sort the arr in ascending order
    arr.sort((a, b) => a - b);

    // initialize result array
    let result = [];

    // initialize function OneBits(num) with num as paramter
    function OneBits(num) {

        // convert num to binary
        let binary = num.toString(2);

        // find no of 1 in binary string using match(regex)
        let noOfOnes = binary.match(/[1-1]/g) ?? "";

        // return length of noOfOnes
        return noOfOnes.length;
    }

    // run for loop from index 0 to length of arr
    for (let i = 0; i < arr.length; i++) {

        // initialize array temp
        let temp = [];

        // invoke the function OneBits() with argument as arr[i]
        let bits = OneBits(arr[i]);

        // push arr[i] and bits in array temp
        temp.push(arr[i], bits);

        // push array temp in result
        result.push(temp);
    }

    // sort the result array in ascending order by 1th index
    let finalArr = result.sort((a, b) => a[1] - b[1]);

    // find the first value of array using array.map()
    let answer = finalArr.map(row => row[0]);

    // return final answer
    return answer;
};

/*
You are given an integer array arr. Sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

Return the array after sorting it.
*/


/*
Example 1:

Input: arr = [0,1,2,3,4,5,6,7,8]
Output: [0,1,2,4,8,3,5,6,7]
Explantion: [0] is the only integer with 0 bits.
[1,2,4,8] all have 1 bit.
[3,5,6] have 2 bits.
[7] has 3 bits.
The sorted array by bits is [0,1,2,4,8,3,5,6,7]

Example 2:

Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
Output: [1,2,4,8,16,32,64,128,256,512,1024]
Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.
*/


/*
Constraints:

1 <= arr.length <= 500
0 <= arr[i] <= 104
*/