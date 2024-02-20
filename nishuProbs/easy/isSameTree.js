/**
 * https://leetcode.com/problems/same-tree/description/
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.



Example 1:


Input: p = [1,2,3], q = [1,2,3]
Output: true
Example 2:


Input: p = [1,2], q = [1,null,2]
Output: false
Example 3:


Input: p = [1,2,1], q = [1,1,2]
Output: false
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p) {
        if (q) {
            if (p.val !== q.val) {
                return false;
            }
        } else {
            return false;
        }
    } else if (p === null && q === null) {
        return true;
    } else {
        return false;
    }
    return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right))
};

// t = O(n^2), we have to traverse the whole tree
// m = O(n^2), we have to traverse the whole tree
// t=47ms 84.45% | m = 49.14MB 26.66%

// make bi trees for practice
class Leaf {
    constructor (val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Input: p = [1,2,3], q = [1,2,3]
// Output: true
/*
   1
  / \
 2   3
*/
// making p
// making nodes
const p1 = new Leaf(1);
const p2 = new Leaf(2);
const p3 = new Leaf(3);
// making connections
p1.left = p2;
p1.right = p3;

// making q
const q1 = new Leaf(1);
const q2 = new Leaf(2);
const q3 = new Leaf(3);
q1.left = q2;
q1.right = q3;

console.log(isSameTree(p1, q1), true);
/*
p =
   1
  / \
 2   1
q =
   1
  / \
 1   2
*/
const pp1 = new Leaf(1);
const pp2 = new Leaf(2);
const pp3 = new Leaf(1);
pp1.left = pp2;
pp2.right = pp3;

const qq1 = new Leaf(1);
const qq2 = new Leaf(1);
const qq3 = new Leaf(2);
qq1.left = qq2;
qq1.right = qq3;
console.log(isSameTree(pp1, qq1), false);
