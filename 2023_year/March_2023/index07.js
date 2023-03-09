// https://leetcode.com/problems/linked-list-cycle-ii/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head, fast = head;

while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) break;
}

if (!fast || !fast.next) return null;

fast = head;

while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
}

return slow;
};

console.log([3,2,0,-4]); // tail connects to node index 1

/*
Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
*/