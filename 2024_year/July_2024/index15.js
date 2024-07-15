// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {

    // initialize binary as empty string
    let binary: number = "";

    // run while loop until head is not null
    while (head) {

        // add current value of head in binary
        binary += head.val;

        // update head with next value of head
        head = head.next;
    }

    // convert binary to decimal using "0b" and convert back to number using "+" and return decimal answer
    return +`0b${binary}`;
};


/*
Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

The most significant bit is at the head of the linked list.
*/


/*
Example 1:


Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10

Example 2:

Input: head = [0]
Output: 0
*/


/*
Constraints:

The Linked List is not empty.
Number of nodes will not exceed 30.
Each node's value is either 0 or 1.
*/