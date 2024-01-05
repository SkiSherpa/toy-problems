/*
https://leetcode.com/problems/diameter-of-binary-tree/
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.



Example 1:


Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
Example 2:

Input: root = [1,2]
Output: 1


Constraints:

The number of nodes in the tree is in the range [1, 104].
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
 * @return {number}
 */
//  The most number of edges between two nodes. - Diameter doesn't seem like a good word choice
// Finding the longest path on the left and right side of the root
// Keep doing that while updating the count of edges
// I assume a dfs search, then adding to

var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    dfs(root);

    return diameter;

    function dfs(node) {
        if (!node) return 0;

        const left = dfs(node.left);
        console.log("L fired, node", node, "left", left);
        const right = dfs(node.right);

        // update diameter at every node
        // Math.max returns the largest number from params
        console.log(left, right);
        diameter = Math.max(diameter, left + right);

        // update the largest number of edge so far,
        // but when going back up the branch
        return 1 + Math.max(left, right);
    }
};
// t = O(n), where n is the number of nodes.
// m = O(n), when n is the number of nodes.
    // you could have a completely unbalanced tree with one branch
    // at each node you have a left and right that are being created and saved
// t = 130ms 5% | 50.14Mb 5%

/* with ex 1:
    1
   / \
  2   3
 / \
4   5
logs look like:
L fired, node [4] left 0
0 0
L fired, node [2,4,5] left 1
L fired, node [5] left 0
0 0
1 1
L fired, node [1,2,3,4,5] left 2
L fired, node [3] left 0
0 0
2 1

*/

/*  I need someone elses sol */
// IF no root - edge/base case
    // return zero
// create edge count = 0
// helper function to pass next node and keep track of edgeCount
    // IF root.right exist
        // make count go up by 1
        // return make next right node call
    // IF root.left exist
        // make count go up by 1
        // return make next left node call
    // return count

    var _diameterOfBinaryTree = function(root) {
        if (!root) {
            return 0;
        }
        let count = 0

        function maxCount(node, count) {
            if (!node) {
                return 0;
            }
            console.log(node.val);
            if (node.right) {
                count++;
                count += maxCount(node.right, count);
            }
            if (node.left) {
                console.log("Left node", node);
                count++;
                console.log("node.left", node.left, "count", count);
                count += maxCount(node.left, count);
            }
            return count;
        }
        return maxCount(root, count);
        // return count;
    };
