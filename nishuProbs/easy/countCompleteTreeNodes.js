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
//  IP: root of bi tree
// OP: a number - count of nodes

// create a count = 0
// create a helper function to count each node
// (next node, count) - return the count
// base case - IF node doesn't exist
// return the count
// count++
// call left and right nodes

var countNodes = function (root) {
    function dfs(node) {
        if (!node) {
            return 0;
        }
        return 1 + dfs(node.right) + dfs(node.left)
    }
    return dfs(root);
};

// t = O(n) - where n is the number of node.
    // you have to visit each node at least once and percform a const time operation on it
// m = O(n), The length of a branch, so height of the tree is what is taking up space in the recursion.
