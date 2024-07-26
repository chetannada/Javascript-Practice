// https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (head) {

    // initialize arr as empty array to store the ListNode value 
    let arr = [];

    // initialize result as [-1, -1]
    let result = [-1, -1];

    // initialize current as head of the node
    let current = head;

    // run while loop and store every ListNode value in arr
    while (current) {

        // store current node value in value
        let value = current.val;

        // push value in arr
        arr.push(value);

        // update current node with next of current
        current = current.next;
    }

    // if length of arr is less than or equal to 2 then return result
    if (arr.length <= 2) {
        return result;
    }

    // initialize critical as empty array
    let critical = [];

    // run for loop from index 1 to length of arr -1
    for (let i = 1; i < arr.length - 1; i++) {

        // if current value of arr is less than previous value of arr and next value of arr 
        // OR current value of arr is greater than previous value of arr and next value of arr
        // then push i+1 in array critical
        if ((arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) || (arr[i] > arr[i - 1] && arr[i] > arr[i + 1])) {

            critical.push(i + 1);
        }
    }

    // if length of critical array is less than or equal to 1 then return result
    if (critical.length <= 1) {
        return result;
    }

    // initialize min as Infinity
    let min = Infinity;

    // initialize max as difference between last and first value of array critical
    let max = critical.at(-1) - critical.at(0);

    // run for loop from index 0 to critical length - 1
    for (let i = 0; i < critical.length - 1; i++) {

        // calculate difference between next value of arr critical and current value of arr critical
        let diff = critical.at(i + 1) - critical.at(i);

        // find minimum between min and diff and assign back to min
        min = Math.min(min, diff);
    }

    // assign 0th index value of result as min and 1th index value as max
    result[0] = min;
    result[1] = max;

    // return answer result
    return result;
};


/*
A critical point in a linked list is defined as either a local maxima or a local minima.

A node is a local maxima if the current node has a value strictly greater than the previous node and the next node.

A node is a local minima if the current node has a value strictly smaller than the previous node and the next node.

Note that a node can only be a local maxima/minima if there exists both a previous node and a next node.

Given a linked list head, return an array of length 2 containing [minDistance, maxDistance] where minDistance is the minimum distance between any two distinct critical points and maxDistance is the maximum distance between any two distinct critical points. If there are fewer than two critical points, return [-1, -1].
*/

/*
Example 1:

Input: head = [3,1]
Output: [-1,-1]
Explanation: There are no critical points in [3,1].

Example 2:

Input: head = [5,3,1,2,5,1,2]
Output: [1,3]
Explanation: There are three critical points:
- [5,3,1,2,5,1,2]: The third node is a local minima because 1 is less than 3 and 2.
- [5,3,1,2,5,1,2]: The fifth node is a local maxima because 5 is greater than 2 and 1.
- [5,3,1,2,5,1,2]: The sixth node is a local minima because 1 is less than 5 and 2.
The minimum distance is between the fifth and the sixth node. minDistance = 6 - 5 = 1.
The maximum distance is between the third and the sixth node. maxDistance = 6 - 3 = 3.

Example 3:

Input: head = [1,3,2,2,3,2,2,2,7]
Output: [3,3]
Explanation: There are two critical points:
- [1,3,2,2,3,2,2,2,7]: The second node is a local maxima because 3 is greater than 1 and 2.
- [1,3,2,2,3,2,2,2,7]: The fifth node is a local maxima because 3 is greater than 2 and 2.
Both the minimum and maximum distances are between the second and the fifth node.
Thus, minDistance and maxDistance is 5 - 2 = 3.
Note that the last node is not considered a local maxima because it does not have a next node.
*/


/*
Constraints:

The number of nodes in the list is in the range [2, 105].
1 <= Node.val <= 105
*/