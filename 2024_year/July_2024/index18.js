// https://leetcode.com/problems/merge-in-between-linked-lists/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {

    // initialize temp variable to hold the node at position 'a'
    let temp = null;

    // initialize current to traverse node list1
    let current = list1;

    // initialize i to track the current position in node list1
    let i = 0;

    // run while loop until the end of current node
    while (current.next) {

        // if index i is equal to a - 1
        if (i === a - 1) {

            // store next node of current to temp
            temp = current.next;

            // link the current node to the head of list2
            current.next = list2;
        }
        // move to the next node and increment the index i
        current = current.next;
        i++;
    }

    // traverse the temp list from position 'a' to 'b'
    for (let j = a; j < b + 1; j++) {

        // move to the next temp node
        temp = temp.next;
    }

    // link the end of list2 to the node after 'b'
    current.next = temp;

    // return the modified node list1
    return list1;
};


/*
You are given two linked lists: list1 and list2 of sizes n and m respectively.

Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

The blue edges and nodes in the following figure indicate the result:


Build the result list and return its head.
*/


/*
Example 1:

Input: list1 = [10,1,13,6,9,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
Output: [10,1,13,1000000,1000001,1000002,5]
Explanation: We remove the nodes 3 and 4 and put the entire list2 in their place. The blue edges and nodes in the above figure indicate the result.

Example 2:

Input: list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]
Output: [0,1,1000000,1000001,1000002,1000003,1000004,6]
Explanation: The blue edges and nodes in the above figure indicate the result.
*/


/*
Constraints:

3 <= list1.length <= 104
1 <= a <= b < list1.length - 1
1 <= list2.length <= 104
*/