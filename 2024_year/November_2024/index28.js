// https://leetcode.com/problems/rotate-list/description/


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
var rotateRight = function (head, k) {

    // if k is equal to 0 or head is equal to null then return current head
    if (k === 0 || head === null) return head;

    // Initialize current to head, it will be used to traverse the list
    let current = head;

    // Initialize arr to an empty array. it will store the node values
    let arr = [];

    // Traverse the linked list until current is not null
    while (current) {

        // push each node's value to arr
        arr.push(current.val);

        // update current with next value of current
        current = current.next;
    }

    // we have to Rotate the list by k is the same as rotating by k % arr.length
    let last = k % arr.length;

    // initialize temp as empty array to add removed element from arr
    let temp = [];

    // run for loop from 1 to las (inclusive)
    for (let i = 1; i <= last; i++) {

        // remove last element from arr and push into temp
        temp.push(arr.pop());
    }

    // reverse the array temp
    temp.reverse();

    // update arr by concating array temp and arr
    arr = [...temp, ...arr];

    // initialize finalHead as a new ListNode containing the first value of arr
    let finalHead = new ListNode(arr[0]);

    // tempHead is a pointer to the finalHead in the new linked list
    let tempHead = finalHead;

    // initialize index x is equal to 1
    let x = 1;

    // run while loop until x is less than length of arr
    while (x < arr.length) {

        // initialize temp as a new ListNode containing the arr[x] as value
        let temp = new ListNode(arr[x]);

        // update next value of temphead as temp
        tempHead.next = temp;

        // update temphead as next value of tempHead
        tempHead = tempHead.next;

        // increment index x
        x++;
    }

    // return linkedlist finalHead 
    return finalHead;
};


/*
Given the head of a linked list, rotate the list to the right by k places.

 
*/


/*
Example 1:

Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Example 2:

Input: head = [0,1,2], k = 4
Output: [2,0,1]
*/


/*
Constraints:

The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 109
*/