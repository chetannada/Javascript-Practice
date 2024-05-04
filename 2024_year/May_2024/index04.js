// https://leetcode.com/problems/boats-to-save-people/description/

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
    // sort the element of array people
    people.sort((a, b) => a - b);

    // initialize count to 0
    let count = 0;

    // initialize l to 0 and r to length of people - 1
    let l = 0, r = people.length - 1;

    // run while loop until l less than or equal to r
    while (l <= r) {

        // if people[l] + people[r] less than or equal to limit then increase l and decrease r
        if (people[l] + people[r] <= limit) {
            l++;
            r--;
        } else { // else decrease r
            r--;
        }

        // increacse count
        count++;
    }

    // return boat count
    return count;
};

/*
You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.
*/


/*
Example 1:

Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)

Example 2:

Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)

Example 3:

Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)
*/


/*
Constraints:

1 <= people.length <= 5 * 104
1 <= people[i] <= limit <= 3 * 104
*/