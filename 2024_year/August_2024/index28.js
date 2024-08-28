// https://leetcode.com/problems/n-ary-tree-postorder-traversal/description/

/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {

    // initialize an empty array result to store the postorder traversal values
    let result = [];

    // initialize helper function called helperPostOrder that takes a node as an argument
    function helperPostOrder(node) {

        // If the node is null, we return immediately (base case)
        if (!node) {
            return;
        }

        // iterate through each child of the node using a for of loop
        for (let child of node.children) {

            // recursively call helperPostOrder on that child
            helperPostOrder(child);
        }

        // push the value of the current node into the result array
        result.push(node.val);
    }

    // invoke the helperPostOrder function with the root node and return the result array
    helperPostOrder(root);

    // return result array
    return result;
};


/*
Given the root of an n-ary tree, return the postorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)
*/


/*
Example 1:

Input: root = [1,null,3,2,4,null,5,6]
Output: [5,6,3,2,4,1]

Example 2:

Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]
*/


/*
Constraints:

The number of nodes in the tree is in the range [0, 104].
0 <= Node.val <= 104
The height of the n-ary tree is less than or equal to 1000.
*/