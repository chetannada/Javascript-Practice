// https://leetcode.com/problems/merge-nodes-in-between-zeros/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {

    // create temporary ListNode with value 0
    let temp = new ListNode(0);

    // pointer to temp ListNode
    let currentTemp = temp;

    // Start from the node after the initial zero
    let currentHead = head.next;

    // initialize sum for counting values between zeros
    let sum = 0;

    // run while loop until currentHead is not equal to null
    while (currentHead !== null) {

        // if value of currentHead is eqaul to 0 
        if (currentHead.val === 0) {

            // if sum is not 0
            if (sum) {

                // create new node with value sum
                currentTemp.next = new ListNode(sum);

                // point currentTemp to next node of currentTemp
                currentTemp = currentTemp.next;

                // reset the sum value to 0
                sum = 0;
            }
        } else {

            // add the current value of currentHead in sum 
            sum += currentHead.val;
        }

        // point currentHead to next node of currentHead
        currentHead = currentHead.next;
    }

    // return next node of temp
    return temp.next;
};

/*
You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0.

For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0's.

Return the head of the modified linked list.
*/


/*
Example 1:

Input: head = [0,3,1,0,4,5,2,0]
Output: [4,11]
Explanation: 
The above figure represents the given linked list. The modified list contains
- The sum of the nodes marked in green: 3 + 1 = 4.
- The sum of the nodes marked in red: 4 + 5 + 2 = 11.

Example 2:

Input: head = [0,1,0,3,0,2,2,0]
Output: [1,3,4]
Explanation: 
The above figure represents the given linked list. The modified list contains
- The sum of the nodes marked in green: 1 = 1.
- The sum of the nodes marked in red: 3 = 3.
- The sum of the nodes marked in yellow: 2 + 2 = 4.
*/


/*
Constraints:

The number of nodes in the list is in the range [3, 2 * 105].
0 <= Node.val <= 1000
There are no two consecutive nodes with Node.val == 0.
The beginning and end of the linked list have Node.val == 0.
*/