/*
Given the root of a binary tree, invert the tree, and return its root.

Example 1:

Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
      4
     / \
    2   7
   / \ / \
  1  3 6  9
      4
     / \
    2   7
   / \ / \
  1  3 6  9


Example 2:
Input: root = [2,1,3]
Output: [2,3,1]
   2         2
  / \   ->  / \
 1   3     3   1

Example 3:
Input: root = []
Output: []

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) {
        return root;
    }
    let left = root.left;
    let right = root.right;

    root.left = right;
    root.right = left;

    invertTree(root.left)
    invertTree(root.right);

    return root;
};

/*
t = O(1)  |  m = O(1)
t = 57ms, 26.52%
m = 42.71MB, 6.5%
*/

// this is so similar but, faster
// t = 50ms, 67.90% | m = 42.45MB, 24.53%
let invertTree2 = function(root) {
    // Base case...
    if(root == null){
        return root
    }
    // Call the function recursively for the left subtree...
    invertTree(root.left)
    // Call the function recursively for the right subtree...
    invertTree(root.right)
    // swapping process...
    const curr = root.left
    root.left = root.right
    root.right = curr
    return root         // Return the root...
}
// ITS JUST SETTING THE ONE VAR INSTEAD OF 2
// If I change my solution to this:
var invertTree = function(root) {
    if (!root) {
         return root;
     }

     let left = root.left;
     root.left = root.right;
     root.right = left;

     invertTree(root.left)
     invertTree(root.right);

     return root;
 };
//  t = 50ms, 67.98%
// m = 42.09MB, 69.42%
// Its in general better, t is the same, but mem is much better
