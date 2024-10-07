// https://leetcode.com/problems/sort-list/description/


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
var sortList = function (head) {

    // initialize current as head of linked list node
    let current = head;

    // initialize result as empty array
    let result = [];

    // run while loop until current is not null
    while (current) {

        // initialize val as current.val
        let val = current.val;

        // push val in result
        result.push(val);

        // update current with current.next 
        current = current.next;
    }

    // sort the result in ascending order
    result.sort((a, b) => a - b);

    // initialize dummy as ListNode with initial value as 0
    let dummy = new ListNode(0);

    // initialize dummyHead as dummy
    let dummyHead = dummy

    // initialize i as 0
    let i = 0;

    // run while loop until i is less than result.length
    while (i < result.length) {

        // initialize temp as Listnode with initial value as result[i]
        let temp = new ListNode(result[i]);

        // update dummyHead.next as temp Listnode
        dummyHead.next = temp;

        // update dummyHead as dummyHead.next
        dummyHead = dummyHead.next;

        // increment i
        i++;
    }

    // return final listnode dummy.next
    return dummy.next;
};


/*
Given the head of a linked list, return the list after sorting it in ascending order.
*/


/*
Example 1:

Input: head = [4,2,1,3]
Output: [1,2,3,4]

Example 2:

Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]

Example 3:

Input: head = []
Output: []
*/


/*
Constraints:

The number of nodes in the list is in the range [0, 5 * 104].
-105 <= Node.val <= 105
*/