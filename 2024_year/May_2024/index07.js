// https://leetcode.com/problems/sort-the-people/description/

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {

    // initialize new Map()
    let map = new Map();

    // initialize result array
    let result = [];

    // run for loop from index 0 to length of heights
    for (let i = 0; i < heights.length; i++) {

        // set ith value of heights as key and i as index in map
        map.set(heights[i], i);
    }

    // sort the array heights in descending order
    heights.sort((a, b) => b - a);

    // run for of loop of heights
    for (let num of heights) {

        // find index of each value of heights
        let index = map.get(num);

        // then push index value of names in array result
        result.push(names[index]);
    }

    // return array result
    return result;
};

/*
You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.
*/


/*
Example 1:

Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John.

Example 2:

Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
Output: ["Bob","Alice","Bob"]
Explanation: The first Bob is the tallest, followed by Alice and the second Bob.
*/


/*
Constraints:

n == names.length == heights.length
1 <= n <= 103
1 <= names[i].length <= 20
1 <= heights[i] <= 105
names[i] consists of lower and upper case English letters.
All the values of heights are distinct.
*/