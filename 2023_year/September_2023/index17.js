// https://leetcode.com/problems/reducing-dishes/description/

/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function (satisfaction) {

    // sort the array satisfaction in ascending order
    satisfaction.sort((a, b) => a - b);

    // initialize empty array timCoeffArr
    let timeCoeffArr = [];

    // initialize function maxSum() with paramter arr
    function maxSum(arr) {

        // initialize sum to be zero
        let sum = 0;

        // loop through every element of array arr
        for (let i = 0; i < arr.length; i++) {

            // add sum and multiplication of current element with i+1 to sum
            sum += (arr[i] * (i + 1));
        }

        // return sum
        return sum;
    }

    // loop through every element of array satisfaction
    for (let i = 0; i < satisfaction.length; i++) {

        // invoke the function maxSum() with argument satisfaction.slice(i) and push that value in array timeCoeffArr
        timeCoeffArr.push(maxSum(satisfaction.slice(i)));
    }

    // find the maximum value from the array timeCoeffArr using Math.max()
    let max = Math.max(...timeCoeffArr);

    // if max is greater than or equal to zero then return max neither 0
    return max >= 0 ? max : 0;
};


/*
A chef has collected data on the satisfaction level of his n dishes. Chef can cook any dish in 1 unit of time.

Like-time coefficient of a dish is defined as the time taken to cook that dish including previous dishes multiplied by its satisfaction level i.e. time[i] * satisfaction[i].

Return the maximum sum of like-time coefficient that the chef can obtain after dishes preparation.

Dishes can be prepared in any order and the chef can discard some dishes to get this maximum value.
*/


/*
Example 1:

Input: satisfaction = [-1,-8,0,5,-9]
Output: 14
Explanation: After Removing the second and last dish, the maximum total like-time coefficient will be equal to (-1*1 + 0*2 + 5*3 = 14).
Each dish is prepared in one unit of time.

Example 2:

Input: satisfaction = [4,3,2]
Output: 20
Explanation: Dishes can be prepared in any order, (2*1 + 3*2 + 4*3 = 20)

Example 3:

Input: satisfaction = [-1,-4,-5]
Output: 0
Explanation: People do not like the dishes. No dish is prepared.
*/


/*
Constraints:

n == satisfaction.length
1 <= n <= 500
-1000 <= satisfaction[i] <= 1000
*/