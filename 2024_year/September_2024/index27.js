// https://leetcode.com/problems/merge-intervals/description/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

    // sort the array intervals in ascending order based on first value of every element
    intervals.sort((a, b) => a[0] - b[0]);

    // initialize result as array with first element as intervals[0]
    let result = [intervals[0]];

    // run for loop from index 1 to length of intervals
    for (let i = 1; i < intervals.length; i++) {

        // initialize start as intervals[i][0]
        let start = intervals[i][0];

        // initialize end as result[result.length - 1][1]
        let end = result[result.length - 1][1];

        // if end is greater than or equal to start
        if (end >= start) {

            // if end is less than intervals[i][1] 
            if (end < intervals[i][1]) {

                // update last element of result of second value with intervals[i][1]
                result[result.length - 1][1] = intervals[i][1];
            }
        } else {

            // else push intervals[i] in result
            result.push(intervals[i]);
        }
    }

    // return final answer result
    return result;
};


/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
*/


/*
Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/


/*
Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
*/