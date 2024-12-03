// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/


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
var deleteDuplicates = function (head) {

    // initialize current as listnode head
    let current = head;

    // initialize arr to push value of listnode
    let arr = [];

    // run while loop until current is not null
    while (current) {

        // push value of node current in arr
        arr.push(current.val);

        // update current with current.next
        current = current.next;
    }

    // if length of arr is less than or eqaul to 1 then return head
    if (arr.length <= 1) return head;

    // initialize map for counting frequency of element of array
    let map = new Map();

    // run for loop from index 0 to length of arr
    for (let i = 0; i < arr.length; i++) {

        // count the frequency of arr
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }

    // initialize tempArr to remove duplicate element from arr
    let tempArr = [];

    // run for of loop for map.entries() to remove duplicate element
    for (let [key, value] of map.entries()) {

        // if value is 1 then push key in tempArr
        if (value === 1) {
            tempArr.push(key);
        }
    }

    // initialize finalHad as new listnode
    let finalHead = new ListNode(null);

    // initialize tempHead as finalHead
    let tempHead = finalHead;

    // initialize j as 0
    let j = 0;

    // run while loop until j is less than length of tempArr
    while (j < tempArr.length) {

        // initialize tempNode as new ListNode with tempArr[j] as value
        let tempNode = new ListNode(tempArr[j]);

        // update tempHead.next as tempNode
        tempHead.next = tempNode;

        // update tempHead as tempHead.next
        tempHead = tempHead.next;

        // increment j
        j++;
    }

    // return next value of finalHead
    return finalHead.next;
};


/*
Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.
*/


/*
Example 1:

Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]

Example 2:

Input: head = [1,1,1,2,3]
Output: [2,3]

*/


/*
Constraints:

    The number of nodes in the list is in the range [0, 300].
    -100 <= Node.val <= 100
    The list is guaranteed to be sorted in ascending order.

*/