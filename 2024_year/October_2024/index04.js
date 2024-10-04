// https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/description/


/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {

    // sort the skill in ascending order
    skill.sort((a, b) => a - b);

    // initialize sum as sum of first and last element of sum
    let sum = skill.at(0) + skill.at(-1);

    // initialize result as 0
    let result = 0;

    // initialize Two pointer i and j
    let i = 0, j = skill.length - 1;

    // run while loop until i less than j
    while (i < j) {

        // initialize tempSum as sum of ith and jth element of sum
        let tempSum = skill[i] + skill[j];

        // initialize mul as sum of ith and jth element of mul
        let mul = skill[i] * skill[j];

        // if tempSum is not equal to sum then return -1
        if (tempSum !== sum) {
            return -1;
        }

        // add mul in result
        result += mul;

        // move ith pointer towards right and jth pointer towards left
        i++;
        j--;
    }

    // return final answer result
    return result;
};

/*
You are given a positive integer array skill of even length n where skill[i] denotes the skill of the ith player. Divide the players into n / 2 teams of size 2 such that the total skill of each team is equal.

The chemistry of a team is equal to the product of the skills of the players on that team.

Return the sum of the chemistry of all the teams, or return -1 if there is no way to divide the players into teams such that the total skill of each team is equal.
*/


/*
Example 1:

Input: skill = [3,2,5,1,3,4]
Output: 22
Explanation: 
Divide the players into the following teams: (1, 5), (2, 4), (3, 3), where each team has a total skill of 6.
The sum of the chemistry of all the teams is: 1 * 5 + 2 * 4 + 3 * 3 = 5 + 8 + 9 = 22.

Example 2:

Input: skill = [3,4]
Output: 12
Explanation: 
The two players form a team with a total skill of 7.
The chemistry of the team is 3 * 4 = 12.

Example 3:

Input: skill = [1,1,2,3]
Output: -1
Explanation: 
There is no way to divide the players into teams such that the total skill of each team is equal.
*/


/*
Constraints:

2 <= skill.length <= 105
skill.length is even.
1 <= skill[i] <= 1000
*/