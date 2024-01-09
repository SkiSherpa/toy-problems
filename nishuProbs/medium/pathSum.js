/*
https://leetcode.com/problems/path-sum-iii/
Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).



Example 1:


Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
Output: 3
Explanation: The paths that sum to 8 are shown.
Example 2:

Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: 3


Constraints:

The number of nodes in the tree is in the range [0, 1000].
-109 <= Node.val <= 109
-1000 <= targetSum <= 1000
*/
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
 * @param {number} targetSum
 * @return {number}
 */
// IP: root of a bi tree, target number
// OP: number - number of paths that equal target sum

// OTHER SOL, BUT IS CLOSE TO WHAT YOUR THINK IS
// https://www.youtube.com/watch?v=VDTZiggKlAE
// his sol is in python, and comes up with a more optimal way that is similar to the top JS sol on leet code.
const pathSum = (root, targetSum) => {
	let count = 0;
    let helper = function(node, curVal) {
        if (!node) return;
        // find children val + curVal
        helper(node.left, curVal + node.val);
        helper(node.right, curVal + node.val);
        if (curVal + node.val === targetSum) {
            count++;
        }
    }
    let dfs = function(node) {
        if (!node) return;
        helper(node,0);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return count;
};
// check every path for tree and sub-tree with dfs search
// create count var and set to zero
// call dfs helper on root and target sum
var _pathSum = function(root, targetSum) {
    let count = 0;

    let dfs = function(node, targetSum, curSum) {
        if (!node) {
            return;
        }
        // IF current val + curSum === targetSum
            // count++
        if (node.val + curSum === targetSum) {
            count++;
        }
        //  check left and right children
        dfs(node.left);
        dfs(node.right)
        return;
    }
    dfs(root, targetSum, curSum=0);

    // while(root.right) {
    //     dfs(root.right, targetSum, curSum=0);
    // }
    // while(root.left) {
    //     dfs(root.left, targetSum, curSum=0);
    // }

    return count;
};
