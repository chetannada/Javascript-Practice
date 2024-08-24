// https://leetcode.com/problems/range-sum-of-bst/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {

    // initialize rootArr for collecting all node value
    let rootArr = [];

    // initialize sum for finding range sum of BST
    let sum = 0;

    // initialize function traversal (depth-first traversal of BST) to collect all node values in rootArr 
    function traversal(node) {

        if (node) {
            traversal(node.left);
            rootArr.push(node.val);
            traversal(node.right);
        }
    }

    // invoke function traversal(root)
    traversal(root);

    // run for of loop for rootArr
    for (let num of rootArr) {

        // if num is greater than or equal to low and num is less than or equal high then add num in sum
        if (num >= low && num <= high) {
            sum += num;
        }
    }

    // return final answer sum
    return sum;
};


/*
Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].
*/


/*
Example 1:

Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

Example 2:

Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
Output: 23
Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.
*/


/*
Constraints:

The number of nodes in the tree is in the range [1, 2 * 104].
1 <= Node.val <= 105
1 <= low <= high <= 105
All Node.val are unique.
*/