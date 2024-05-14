// https://leetcode.com/problems/remove-nodes-from-linked-list/description/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNodes(head: ListNode | null): ListNode | null {
    // initialize cur to the head of the linkedlist
    let cur: ListNode | null = head;

    // initialize array stack that will be used to store the nodes temporarily.
    let stack: ListNode[] = [];

    // Traverse the Linked List and Build Stack:
    //  loop iterates through the linked list
    while (cur) {

        // removes nodes from the stack that have a value less than the current node's value
        while (stack.length && stack.at(-1).val < cur.val) {
            stack.pop();
        }

        // push the current node in to stack
        stack.push(cur);

        // moves next node to the cur
        cur = cur.next;
    }

    // Rebuild the Linked List:
    let next: ListNode | null = null;

    // run loop until length of stack is greater than 0
    while (stack.length) {

        // remove last node from stack
        cur = stack.pop();

        // update the cur next to next
        cur.next = next;

        // update the next with cur node because preparing for the next iteration.
        next = cur;
    }

    //  return next which is points to the head of the linked list
    return next;
};

/*
You are given the head of a linked list.

Remove every node which has a node with a greater value anywhere to the right side of it.

Return the head of the modified linked list.

*/


/*
Example 1:

Input: head = [5,2,13,3,8]
Output: [13,8]
Explanation: The nodes that should be removed are 5, 2 and 3.
- Node 13 is to the right of node 5.
- Node 13 is to the right of node 2.
- Node 8 is to the right of node 3.

Example 2:

Input: head = [1,1,1,1]
Output: [1,1,1,1]
Explanation: Every node has value 1, so no nodes are removed.
*/


/*
Constraints:

The number of the nodes in the given list is in the range [1, 105].
1 <= Node.val <= 105
*/