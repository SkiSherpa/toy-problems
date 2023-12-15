// make a binary tree that has the following structure:
/*
    4
   / \
  2   5
 / \   \
3   1   7
         \
          8
*/

class TreeNode {
    constructor(value) {
        this.value = value;
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

console.log(root);
