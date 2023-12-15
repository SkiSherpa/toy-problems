/*
     4
   / | \
  2  6  5
 / \  \  \
3   1  9  7
        / | \
       11 12 13

*/

// make blueprint for nodes
class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

// make nodes
const root = new TreeNode(4);
const Node2 = new TreeNode(2);
const Node6 = new TreeNode(6);
const Node5 = new TreeNode(5);

// connect nodes
root.children.push(Node2, Node6, Node5);


console.log(root);
