/*
     1
   /  \
  2    3
 / \    \
4   5    6
        / | \
       7  8  9
*/

class leaf {
    constructor(val) {
        this.val = val;
        this.children = [];
    }
}

// make nodes
const node1 = new leaf(1);
const node2 = new leaf(2);
const node3 = new leaf(3);
const node4 = new leaf(4);
const node5 = new leaf(5);
const node6 = new leaf(6);
const node7 = new leaf(7);
const node8 = new leaf(8);
const node9 = new leaf(9);
// connect node
node1.children.push(node2, node3);
node2.children.push(node4, node5);
node3.children.push(node6);
node6.children.push(node7, node8, node9);



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

console.log(findMaxChildren(node1));
