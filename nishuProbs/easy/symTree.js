// https://leetcode.com/problems/symmetric-tree/solutions/2423766/easy-0-ms-100-fully-explained-java-c-python-js-python3/
/**
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
Input: root = [1,2,2,3,4,4,3]
Output: true
    1
   / \
  2   2
 / \ / \
3  44   3

Input: root = [1,2,2,null,3,null,3]
Output: false
    1
   / \
  2   2
   \   \
    3   3

 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// IP: a tree
// OP: a bool - true if tree is symetic around the center
// C: Seems like the values of the nodes need to be symetric too?
// null can be present for a sym bi tree

// the array of the children of a node split in half should be symetrical
// ex1
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// ex2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false

// ex3 - assuming that this is sym according to chatgpt
// Input: root = [1,2,2,3,null,null,3]
// Output: false


// Instead of compare branches, there are indirect way to measure
// each level should be symetrical, like:
    // 2nd level = [2,2]
    // 3rd level = [3, 4, 4, 3]
    // 4th level = [5, 6, 7, 7, 6, 5]
// check for depth of all branches
    // if depth is not equal for a ll branched, return false
// check each levels numebrs

// level check - bfs search
var isSymmetric = function(root) {

};

// Someone' Sol:
var isSymmetric = function(root) {
    // Edge case
    if (!root)
        return true;
    // Return the function recursively...
    return isSame(root.left, root.right);
};
// A tree is called symmetric if the left subtree must be a mirror reflection of the right subtree...
var isSame = function (leftroot, rightroot) {
    // If both root nodes are null pointers, return true...
    // If exactly one of them is a null node, return false...
    // If root nodes haven't same value, return false...
    if ((!leftroot && rightroot) || (leftroot && !rightroot) || (leftroot && rightroot && leftroot.val !== rightroot.val))
        return false;
    // Return true if the values of root nodes are same and left as well as right subtrees are symmetric...
    if (leftroot && rightroot)
        return isSame(leftroot.left, rightroot.right) && isSame(leftroot.right, rightroot.left);
    return true;
};



// Thinking about the problem - have abandoned this approach
// check the outside branches, then inside branches
//      /\
//     /  \
// then
//       /\
//       \/

/*
If there was a tree that was 4 levels deep
    /\
   /\/\
  /\/\/\
 5 6776 5
  you check
    /\
   /  \
  /    \
  then
    /\
   /  \
   \  /
   then
    /\
    \/
    /\
compare each side to the other
*/
