// https://leetcode.com/problems/middle-of-the-linked-list/description/

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
var middleNode = function (head) {

    // initialize temp as head node
    let temp = head;

    // initialize final as head node;
    let final = head;

    // initializ i to count node in temp node
    let i = 1;

    // run while loop until temp is not null
    while (temp) {

        // move to the next node and increase i
        temp = temp.next;
        i++;
    }

    // find middle value of i
    let mid = Math.ceil(i / 2);

    // initialize j as 1
    let j = 1;

    // run while loop until j is less than or equal to mid
    while (j <= mid) {

        // if j is equal to mid then break the loop
        if (j === mid) {
            break;
        }

        // move to the next node and increase j
        final = final.next;
        j++;
    }

    // return the modified node final
    return final;
};

/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
*/


/*
Example 1:

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example 2:

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
*/


/*
Constraints:

The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100
*/