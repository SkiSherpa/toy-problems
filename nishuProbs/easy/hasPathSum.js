/**
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

Example 1:
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.

Example 2:
Input: root = [1,2,3], targetSum = 5
Output: false
Explanation: There two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.

Example 3:
Input: root = [], targetSum = 0
Output: false
Explanation: Since the tree is empty, there are no root-to-leaf paths.

Constraints:

The number of nodes in the tree is in the range [0, 5000].
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000
 * https://leetcode.com/problems/path-sum/
 *
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
 * @return {boolean}
 */
// IP: the root of a bi tree
// OP: bool - true if entire branch equals the target sum
// C: sum must be entire branch

// have to dfs
// base case:
    // IF current node's next is null && current sum === target sum
        // return true
// travese each branch
// keep track of current sum

// traversed whole tree, return false
var hasPathSum = function(root, targetSum) {
    if (!root) {
        return false;
    }
    if (root.right === null && root.left === null && root.val === targetSum) {
        return true;
    }
    let currSum = root.val;
    let checkBranch = function (node, targetSum, currSum) {
        if (!node) {
            return false;
        }
        currSum += node.val;
        if (node.left === null && node.right === null && targetSum === currSum) {
            return true;
        }
        return (checkBranch(node.right, targetSum, currSum) || checkBranch(node.left, targetSum, currSum));
    }
    return (checkBranch(root.right, targetSum, currSum) || checkBranch(root.left, targetSum, currSum));
};
// t = O(n^2), where n is the number of nodes - could have to traverse the whole tree
// m = O(n^2), where n is the number of nodes - you make vars for each node traversed
// t = 56ms 82.19% | m = 51.72MB 48.39%

class TreeNode {
    constructor(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
// Example 1:
// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// 5 -> 4 -> 11 -> 2
const root1 = new TreeNode(5);
const node4 = new TreeNode(4);
const node8 = new TreeNode(8);
const node11 = new TreeNode(11);
const node13 = new TreeNode(13);
const node4a = new TreeNode(4);
const node7 = new TreeNode(7);
const node2 = new TreeNode(2);
const node1 = new TreeNode(1);
root1.left = node4;
root1.right = node8;
node4.left = node11;
node11.left = node7;
node11.right = node2;
node8.left = node13;
node8.right = node4a;
node4a.right = node1;
console.log(hasPathSum(root1, 22), true);

// ex2:
const root2 = new TreeNode(1);
const node22 = new TreeNode(2);
const node23 = new TreeNode(3);
root2.left = node22;
root2.right = node23;
console.log(hasPathSum(root2, 5), false);
// ex3:
console.log(hasPathSum([], 0), false);
