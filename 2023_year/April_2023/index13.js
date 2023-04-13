// https://leetcode.com/problems/count-good-triplets/

/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let count = 0;
    for(let i =0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
           for(let k=j+1; k<arr.length; k++){
                let first = Math.abs(arr[i] - arr[j]);
                let second = Math.abs(arr[j] - arr[k]);
                let third = Math.abs(arr[i] - arr[k]);
                if(first <= a && second <= b && third <= c){
                count++;
                }
           }
            
        }
    }
    return count;
};

/*
Example 1:
Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
Output: 4
Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].


Example 2:
Input: arr = [1,1,2,2,3], a = 0, b = 0, c = 1
Output: 0
Explanation: No triplet satisfies all conditions.
*/