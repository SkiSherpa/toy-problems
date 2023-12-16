// using tree from BiTree, find the largest value. Just return the value of the node.

// binaryTree largest val = 8

class TreeNode {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}
// making nodes
const root = new TreeNode(4);
const Node2 = new TreeNode(2);
const Node5 = new TreeNode(5);
const Node3 = new TreeNode(3);
const Node1 = new TreeNode(1);
const Node7 = new TreeNode(7);
const Node8 = new TreeNode(8);
// connecting nodes
root.left = Node2;
root.right = Node5;
Node2.left = Node3;
Node2.right = Node1;
Node5.right = Node7;
Node7.right = Node8;
/*
    4
   / \
  2   5
 / \   \
3   1   7
         \
          8
*/

// bfs
// IF current nodes val is target val
    // return node
// IF current node.left.val === target val
    // return node.left
// IF current node.right.val === target val
    // return node.right
// recursively check left and right node of current node

function bfs(node, targetNode) {
    if (node === null) {
        return false;
    }

    if (node.val === targetNode) {
        return node.val;
    }

    return (bfs(node.left, targetNode) || bfs(node.right, targetNode));
}

console.log(bfs(root, 12));
