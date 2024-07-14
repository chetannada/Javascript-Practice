// https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {

    // set is used here for O(1) time complexity for lookups
    let set = new Set(nums);

    // initialize temp node with value 0
    let temp = new ListNode(0);

    // update next pointer of temp as head
    temp.next = head;

    // traverse the linked list with two pointers: prev (previous node) and current (current node)
    let prev = temp;
    let current = head;

    // run while loop unti current is not equal to null
    while (current) {

        // if set contains current value then update the next pointer of prev to skip the current node
        if (set.has(current.val)) {
            prev.next = current.next;
        } else {

            // else move the prev pointer to the current node.
            prev = current;
        }
        // update current node with next pointer of current node
        current = current.next;
    }

    // return final updated next pointer of temp node
    return temp.next;
};

/*
You are given an array of integers nums and the head of a linked list. Return the head of the modified linked list after removing all nodes from the linked list that have a value that exists in nums.
*/


/*
Example 1:

Input: nums = [1,2,3], head = [1,2,3,4,5]

Output: [4,5]

Explanation:



Remove the nodes with values 1, 2, and 3.

Example 2:

Input: nums = [1], head = [1,2,1,2,1,2]

Output: [2,2,2]

Explanation:



Remove the nodes with value 1.

Example 3:

Input: nums = [5], head = [1,2,3,4]

Output: [1,2,3,4]

Explanation:

No node has value 5.
*/


/*
Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105
All elements in nums are unique.
The number of nodes in the given list is in the range [1, 105].
1 <= Node.val <= 105
The input is generated such that there is at least one node in the linked list that has a value not present in nums.
*/
