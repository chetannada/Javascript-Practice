// https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/

/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function (current, correct) {

    // if string current is equal to string correct then return zero
    if (current === correct) return 0;

    // initialize count to zero
    let count = 0;

    // find total minutes from string current time using parsInt() and slice()
    let currentInMins = parseInt(current.slice(3)) + parseInt(current.slice(0, 2)) * 60;

    // find total minutes from string correct time using parsInt() and slice()
    let correcttInMins = parseInt(correct.slice(3)) + parseInt(correct.slice(0, 2)) * 60;

    // find minute Difference of correcttInMins and currentInMins
    let minuteDifference = correcttInMins - currentInMins;


    // while minuteDifference is not equal to zero then continue the loop
    while (minuteDifference !== 0) {

        // if minuteDifference divide by 60
        if (minuteDifference % 60 === 0) {

            // find minuteDiffCount by dividing minuteDifference to 60
            let minuteDiffCount = parseInt(minuteDifference / 60);

            // subtract minuteDifference by multiplying minuteDiffCount
            minuteDifference -= (minuteDiffCount * 60);

            // add minuteDifference to count
            count += minuteDiffCount;

        } // else if minuteDifference divide by 15
        else if (minuteDifference % 15 === 0) {

            // subtract minuteDifference by 15
            minuteDifference -= 15;

            // increment the count
            count++;

        } // else if minuteDifference divide by 5
        else if (minuteDifference % 5 === 0) {

            // subtract minuteDifference by 5
            minuteDifference -= 5;

            // increment the count
            count++;

        } // else
        else {

            // subtract minuteDifference by 1
            minuteDifference -= 1;

            // increment the count
            count++;
        }
    }

    // return the count
    return count;
};

/*
You are given two strings current and correct representing two 24-hour times.

24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59.

In one operation you can increase the time current by 1, 5, 15, or 60 minutes. You can perform this operation any number of times.

Return the minimum number of operations needed to convert current to correct.
*/


/*
Example 1:

Input: current = "02:30", correct = "04:35"
Output: 3
Explanation:
We can convert current to correct in 3 operations as follows:
- Add 60 minutes to current. current becomes "03:30".
- Add 60 minutes to current. current becomes "04:30".
- Add 5 minutes to current. current becomes "04:35".
It can be proven that it is not possible to convert current to correct in fewer than 3 operations.

Example 2:

Input: current = "11:00", correct = "11:01"
Output: 1
Explanation: We only have to add one minute to current, so the minimum number of operations needed is 1.
*/


/*
Constraints:

current and correct are in the format "HH:MM"
current <= correct
*/