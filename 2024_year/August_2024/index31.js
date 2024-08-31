// https://leetcode.com/problems/swapping-nodes-in-a-linked-list/description/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {

    // initialize current to the head of the linkedlist and array for stroing linkedlist node value
    let current = head;
    let arr = [];

    // run while loop until current will be null
    while (current) {

        // push each node value in array
        arr.push(current.val);

        // update the current with next value of current
        current = current.next;
    }


    // run for loop from index 0 to length of array and swap the nodes in array based on kth value
    for (let i = 0; i < arr.length; i++) {
        if (i + 1 === k) {
            [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
        }
    }

    // create new linkedlist starting with first value of arr
    let resultHead = new ListNode(arr[0]);

    // create dummy pointer used to build the new linked list
    let dummy = resultHead;

    // run for loop from index 1 to length of array to create linkedlist from array
    for (let i = 1; i < arr.length; i++) {
        dummy.next = new ListNode(arr[i]);
        dummy = dummy.next;
    }

    // return thr final head of linked list resulthead
    return resultHead;
};


/*
You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).
*/


/*
Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]
Example 2:

Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]
*/


/*
Constraints:

The number of nodes in the list is n.
1 <= k <= n <= 105
0 <= Node.val <= 100
*/

