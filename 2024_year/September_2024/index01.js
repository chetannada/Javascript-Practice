// https://leetcode.com/problems/odd-even-linked-list/description/

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
var oddEvenList = function (head) {

    // initialize dummy node odd to create odd list and oddPointer is used to traverse the list
    let odd = new ListNode(0);
    let oddPointer = odd;

    // initialize dummy node even to create even list and evenPointer is used to traverse the list
    let even = new ListNode(0);
    let evenPointer = even;

    // initialize index as 1 to keep track of node's position
    let index = 1;

    // run while loop to traverse the original list until head becomes null
    while (head) {

        // if current index is even then head is added to eventlist and move evenPointer to the next node
        if (index % 2 === 0) {
            evenPointer.next = head;
            evenPointer = evenPointer.next;
        } else {

            // else head is added to oddlist and move oddPointer to the next node
            oddPointer.next = head;
            oddPointer = oddPointer.next;
        }

        // move the next node in the head and increase index
        head = head.next;
        index++;
    }

    // set evenPointer next value as null to terminate the evenlist

    // set oddPointer next value as evenlist to add evenlist at last after oddlist
    evenPointer.next = null;
    oddPointer.next = even.next;

    // return head of modified list which is next of odd node
    return odd.next;
};



/*
Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.
*/


/*
Example 1:

Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]

Example 2:

Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]
*/


/*
Constraints:

The number of nodes in the linked list is in the range [0, 104].
-106 <= Node.val <= 106
*/