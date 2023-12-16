// Using the tree from makeTree find the Node with the most childen. If there are ties, return all of them.

// makeTree Node with most children = root & 7
// both have 3
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

// make an obj to hold nodes with the most children
    // {num of max children: [node1, node2]}
// create current max children var set to zero
// IF the current node's children array length is greater than the current max
    // set the current childrens array length to current max
    // push current node into winners array
// loop through current node's children
    // recursive call for current child

// return obj[curMax]

function _findMaxChildren(node, mostKids = {}, curMax = 0) {
    if (node === null) {
        return mostKids;
    }

    if (node.children.length > curMax) {
        curMax = node.children.length
        mostKids[node.children.length] = [node];
    } else if (node.children.length === curMax) {
        mostKids[curMax].push(node);
    }

    for (let i = 0; i < node.children.length; i++) {
        let curChild = node.children[i];
        findMaxChildren(curChild, mostKids, curMax);
    }
    return mostKids[curMax];

}

function findMaxChildren(root, mostKids = {}, curMax = 0) {
    if (!root) {
        return [];
    }

    function dfs(node) {
        if (!node) {
            return;
        }

        if (node.children.length > curMax) {
            mostKids[node.children.length] = [node]
            curMax = node.children.length
        } else if (node.children.length === curMax) {
            mostKids[node.children.length].push(node);
        }

        for (let i = 0; i < node.children.length; i++) {
            let child = node.children[i];
            dfs(child);
        }
    }
    dfs(root);

    // loop over mostKids to find largest key
    // you need the spread for Math.max to work
    let maxCount = Math.max(...Object.keys(mostKids));
    return mostKids[maxCount];

}

console.log(findMaxChildren(root));
