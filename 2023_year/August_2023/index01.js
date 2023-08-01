// https://leetcode.com/problems/calculate-delayed-arrival-time/

/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
    let totalTime = arrivalTime + delayedTime; // initialize totalTime is the sum of arrivalTime and delayedTime

    if (totalTime == 24) { // if totalTime is equal to 24 then return 0
        return 0;
    } else if (totalTime < 24) { // if totalTime is less than 24 then return totalTime
        return totalTime;
    } else { // else return subtraction of totalTime to 24
        return totalTime - 24;
    }
};

/*
You are given a positive integer arrivalTime denoting the arrival time of a train in hours, and another positive integer delayedTime denoting the amount of delay in hours.

Return the time when the train will arrive at the station.

Note that the time in this problem is in 24-hours format.
*/

/*
Example 1:
Input: arrivalTime = 15, delayedTime = 5 
Output: 20 
Explanation: Arrival time of the train was 15:00 hours. It is delayed by 5 hours. Now it will reach at 15+5 = 20 (20:00 hours).

Example 2:
Input: arrivalTime = 13, delayedTime = 11
Output: 0
Explanation: Arrival time of the train was 13:00 hours. It is delayed by 11 hours. Now it will reach at 13+11=24 (Which is denoted by 00:00 in 24 hours format so return 0).
 
Constraints:
1 <= arrivaltime < 24
1 <= delayedTime <= 24
*/