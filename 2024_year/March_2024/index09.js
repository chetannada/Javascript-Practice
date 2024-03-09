// https://leetcode.com/problems/interval-list-intersections/

/**
 * @param {number[][]} FL
 * @param {number[][]} SL
 * @return {number[][]}
 */
var intervalIntersection = function (FL, SL) {

    // initialize two pointer a and b and array ans
    let a = 0, b = 0, ans = [];

    // run while loop until a less than length of FL and b less than length of SL
    while (a < FL.length && b < SL.length) {

        // add two element in array, 
        // first: maximum value of 0th element from both array
        // second: minimum value of 1th element of both array
        let arr = [Math.max(FL[a][0], SL[b][0]), Math.min(FL[a][1], SL[b][1])];

        // if 0th element of array is less than or equal to 
        // 1th element of array then push arr into ans
        if (arr[0] <= arr[1]) ans.push(arr);

        // if 1th element of firstList is less than 1th element of SL then increment pointer a     
        if (FL[a][1] <= SL[b][1]) a++;

        // else increment pointer b
        else b++;
    }

    // return answer ans
    return ans;
};

/*
You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.

Return the intersection of these two interval lists.

A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.

The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].
*/


/*
Example 1:

Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

Example 2:

Input: firstList = [[1,3],[5,9]], secondList = []
Output: []
*/


/*
Constraints:

0 <= firstList.length, secondList.length <= 1000
firstList.length + secondList.length >= 1
0 <= starti < endi <= 109
endi < starti+1
0 <= startj < endj <= 109 
endj < startj+1
*/