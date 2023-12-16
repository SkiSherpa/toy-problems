// using tree from makeTree, find the largest value.

// makeTree larget val = 13
// binaryTree largest cal = 8

// makeTree
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
const Node3 = new TreeNode(3);
const Node1 = new TreeNode(9);
const Node7 = new TreeNode(7);
const Node9 = new TreeNode(9);
const Node11 = new TreeNode(11);
const Node12 = new TreeNode(12);
const Node13 = new TreeNode(13);

// connect nodes
root.children.push(Node2, Node6, Node5);
Node2.children.push(Node3, Node1);
Node6.children.push(Node9);
Node5.children.push(Node7);
Node7.children.push(Node11, Node12, Node13);

const makeTree = root;


// biTree

console.log(makeTree);
// Need something that traverses the whole tree
// updating "largest" value as you go

const largestVal = (root) => {
    console.log("hi");
}

console.log(largestVal(makeTree));
