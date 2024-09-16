// https://leetcode.com/problems/minimum-time-difference/description/


/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {

    // initialize minutes as empty array
    let minutes = [];

    // run for of loop for timePoints
    for (let time of timePoints) {

        // find hour from time and minute
        let hour = time.slice(0, 2);
        let min = time.slice(3);

        // convert hour to minute and add min to it
        let sum = (Number(hour) * 60) + Number(min);

        // push sum in to array minutes
        minutes.push(sum);
    }

    // sort the array minutes
    minutes.sort((a, b) => a - b);

    // initialize result as empty array
    let result = [];

    // run for loop from index 0 to minutes.length - 1
    for (let i = 0; i < minutes.length - 1; i++) {

        // calculate difference between next and current element
        let diff = minutes[i + 1] - minutes[i];

        // push diff in result
        result.push(diff);
    }

    // calculate circular difference between last and first element
    let circularDiff = (24 * 60) - minutes.at(-1) + minutes.at(0);

    // push circularDiff in result
    result.push(circularDiff);

    // return minimum value from result array
    return Math.min(...result);
};



/*
Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time-points in the list.
*/


/*
Example 1:

Input: timePoints = ["23:59","00:00"]
Output: 1

Example 2:

Input: timePoints = ["00:00","23:59","00:00"]
Output: 0
*/


/*
Constraints:

2 <= timePoints.length <= 2 * 104
timePoints[i] is in the format "HH:MM".
*/