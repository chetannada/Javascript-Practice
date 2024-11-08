// https://leetcode.com/problems/find-duplicate-subtrees/description/


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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    // Create a hash map to store the subtrees and their counts
 const map = new Map();
 // Create an array to store the duplicate subtrees
 const result = [];

 // Traverse the binary tree recursively
 function traverse(node) {
   // If the node is null, return a special symbol to represent it
   if (!node) return '#';

   // Construct a string representation of the subtree rooted at the current node
   const subtree = `${node.val},${traverse(node.left)},${traverse(node.right)}`;
   // Get the count of the subtree from the hash map, default to 0 if not found
   const count = map.get(subtree) || 0;

   // If the count is 1, it means we've seen this subtree before and it's a duplicate
   if (count === 1) {
     // Add the current node to the result array
     result.push(node);
   }

   // Increment the count of the subtree in the hash map
   map.set(subtree, count + 1);

   // Return the string representation of the subtree
   return subtree;
 }

 // Start the traversal from the root node
 traverse(root);

 // Return the array of duplicate subtrees
 return result;
};


/*
Given the root of a binary tree, return all duplicate subtrees.

For each kind of duplicate subtrees, you only need to return the root node of any one of them.

Two trees are duplicate if they have the same structure with the same node values.
*/


/*
Example 1:


Input: root = [1,2,3,4,null,2,4,null,null,4]
Output: [[2,4],[4]]

Example 2:


Input: root = [2,1,1]
Output: [[1]]

Example 3:


Input: root = [2,2,2,3,null,3,null]
Output: [[2,3],[3]]
*/


/*
Constraints:

The number of the nodes in the tree will be in the range [1, 5000]
-200 <= Node.val <= 200
*/