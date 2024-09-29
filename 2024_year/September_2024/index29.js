// https://leetcode.com/problems/insertion-sort-list/description/

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
var insertionSortList = function (head) {

    // initialize current as head of linked list node
    let current = head;

    // initialize arr as empty array
    let arr = [];

    // run while loop until current is not null
    while (current) {

        // initialize val as current.val
        let val = current.val;

        // push val in arr
        arr.push(val);

        // updatte current with current.next 
        current = current.next;
    }

    // sort the arr in ascending order
    arr.sort((a, b) => a - b);

    // initialize dummy as ListNode with initial value as 0
    let dummy = new ListNode(0);

    // initialize dummyHead as dummy
    let dummyHead = dummy

    // initialize i as 0
    let i = 0;

    // run while loop until i is less than arr.length
    while (i < arr.length) {

        // initialize temp as Listnode with initial value as arr[i]
        let temp = new ListNode(arr[i]);

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
Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.

The steps of the insertion sort algorithm:

Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
It repeats until no input elements remain.
The following is a graphical example of the insertion sort algorithm. The partially sorted list (black) initially contains only the first element in the list. One element (red) is removed from the input data and inserted in-place into the sorted list with each iteration.


*/


/*
Example 1:

Input: head = [4,2,1,3]
Output: [1,2,3,4]

Example 2:

Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
*/


/*
Constraints:

The number of nodes in the list is in the range [1, 5000].
-5000 <= Node.val <= 5000
*/