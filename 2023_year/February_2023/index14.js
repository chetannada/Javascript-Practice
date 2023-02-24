// https://leetcode.com/problems/reverse-nodes-in-k-group/description/

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
var reverseKGroup = function(head, k) {
    // Create a count variable to keep track of the number of nodes in the current sublist.
    let count = 0;
    // Create a node variable to keep track of the current node.
    let node = head;
    // Use a while loop to traverse the list and find the k-th node.
    while (node && count != k) {
        node = node.next;
        count++;
    }
    // If the count is equal to k, we can reverse the sublist.
    if (count == k) {
        // Recursively call reverseKGroup on the rest of the list.
        node = reverseKGroup(node, k);
        // Use another while loop to reverse the sublist, by swapping the head with the node and updating the head and node variables.
        while (count > 0) {
            let temp = head.next;
            head.next = node;
            node = head;
            head = temp;
            count--;
        }
        head = node;
    }
    // Return the head of the modified list.
    return head;
};

console.log(reverseKGroup([1,2,3,4,5], 3)); // [3,2,1,4,5]

/*
Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
*/