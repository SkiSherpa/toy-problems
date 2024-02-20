/**
 * https://leetcode.com/problems/binary-tree-inorder-traversal/

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//  IP: the root of a tree
// OP: an array - values of the tree as you traverse the tree
// You have to apply left, root, right, in that order

// make an array to return
// make helper fn to traverse and hold arr values
//
var inorderTraversal = function(root) {
    let results = [];
    function traverse (node, results) {
        if (node === null) {
            return results
        }
        // left, root, right
        traverse(node.left, results);
        results.push(node.val);
        traverse(node.right, results);
    }
    traverse(root, results);
    return results;
};

// t = O(n^2), where n is the number of nodes
// m = O(n^2), where n is the number of nodes
// t = 54ms 47.83% | m = 48.57MB 49.04%
