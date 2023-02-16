// https://leetcode.com/problems/maximum-depth-of-binary-tree/

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
 * @return {number}
 */
var maxDepth = function(root) {
    let maxCount = 0;
    function countDepthNode(root, nodeDepth = 1){
        if(!root) return;
        if(nodeDepth> maxCount) maxCount = nodeDepth;
        countDepthNode(root.left, nodeDepth + 1);
        countDepthNode(root.right, nodeDepth + 1);
    }
    countDepthNode(root);
    return maxCount;
};
console.log(maxDepth([3,9,20,null,null,15,7]));  // 3
/*
Input: root = [3,9,20,null,null,15,7]
Output: 3
*/