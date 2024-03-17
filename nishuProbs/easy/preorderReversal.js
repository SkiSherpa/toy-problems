/**
 * https://leetcode.com/problems/binary-tree-preorder-traversal/description/
Given the root of a binary tree, return the preorder traversal of its nodes' values.


Example 1:
Input: root = [1,null,2,3]
Output: [1,2,3]

Example 2:
Input: root = []
Output: []

Example 3:
Input: root = [1]
Output: [1]


Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

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
// IP: root of a bi tree
// OP: an array of values

// create empty values array
// use fn to traverse tree
// traverse the tree
    // IF value is not null
        // add value to array
var preorderTraversal = function(root) {
    if (!root) {
        return [];
    }

    let values = [root.val];

    function traverse (node, arr) {
        if (!node) {
            return arr;
        }
        arr.push(node.val);
        return (traverse(node.left, arr) && traverse(node.right, arr))
    }
    return (traverse(root.left, values) && traverse(root.right, values));
};
// t = O(n^2), you have to traverse every node
// m = O(n), memory for a tree is usually the height of the tree
// t = 56ms 31.90% | m = 49.17MB, 27.89%

class TreeNode {
    constructor (val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Ex1;
const root1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
root1.right = node2;
node2.left = node3;
// console.log(preorderTraversal(root1), [1,2,3]);

// ex2:
const root2 = new TreeNode(null);
// console.log(preorderTraversal(root2), []);
// ex3:
const root3 = new TreeNode(1);
// console.log(preorderTraversal(root3), [1]);

// ex4: 19/70
const root4 = new TreeNode(3);
const node42 = new TreeNode(1);
const node43 = new TreeNode(2);
root4.left = node42;
node42.right = node43;
console.log(preorderTraversal(root4), [3,1,2]);

// second version of the same prompt but the ordering of the return array is reversed
// * https://leetcode.com/problems/binary-tree-postorder-traversal/submissions/1206644497/

var postorderTraversal = function(root) {
    if (!root) {
        return [];
    }
    let values = [root.val];

    function findVal (node, arr) {
        if (!node) {
            return arr;
        }
        arr.unshift(node.val);
        return (findVal(node.right, arr) && findVal(node.left, arr));
    }

    return (findVal(root.right, values) && findVal(root.left, values));
};
