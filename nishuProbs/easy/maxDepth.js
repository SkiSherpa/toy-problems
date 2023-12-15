/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  // Creating nodes
  const root = new TreeNode(3);
  const node9 = new TreeNode(9);
  const node20 = new TreeNode(20);
  const node15 = new TreeNode(15);
  const node7 = new TreeNode(7);

  // Connecting nodes to form the binary tree
  root.left = node9;
  root.right = node20;
  node20.left = node15;
  node20.right = node7;
/**
 * @param {TreeNode} root
 * @return {number}
 */
const recursivelyGetHeight = (root, depth) => {
    if(!root) {
        return depth;
    }

    console.log("R)))", root);
    console.log("current depth ", depth);
    console.log("L", root.left);
    // get the highest depth count from either the left or right node
    let ans = Math.max(
        recursivelyGetHeight(root.left, depth + 1),
        recursivelyGetHeight(root.right, depth + 1)
        );
    console.log(ans);
    return ans;
}

var maxDepth = function(root) {
    let height = recursivelyGetHeight(root, 0);

    return height;
};


console.log(maxDepth(root)); // 3

//   3
//  / \
// 9   20
//    /  \
//   15   7
