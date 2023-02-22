// https://leetcode.com/problems/merge-k-sorted-lists/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function mergeLists(a, b) {
    const dummy = new ListNode(0);
    let temp = dummy;
     while (a !== null && b !== null) {
         if (a.val < b.val) {
             temp.next = a;
             a = a.next;
         } else {
             temp.next = b;
             b = b.next;
         }
         temp = temp.next;
     }
    if (a !== null) {
        temp.next = a;
    }
    if (b !== null) {
        temp.next = b;
    }
    return dummy.next;
}

var mergeKLists = function(lists) {
    if (lists.length === 0 ) {
        return null;
    }
    // two two
    // priority queue
    while (lists.length > 1) {
        let a = lists.shift(); // the head will contains the "less" length list
        let b = lists.shift(); // actually, we can use the linkedlist to replace it, the while loop will be the while( list.header.next !== null || lists.length > 0)
        const h = mergeLists(a, b);
        lists.push(h);
    }
    return lists[0];
};

console.log(mergeKLists([[1,4,5],[1,3,4],[2,6]])); // [1,1,2,3,4,4,5,6]

/*
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
*/