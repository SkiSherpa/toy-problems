class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {
    constructor() {
      this.root = null;
    }

    insert(value) {
      const newNode = new TreeNode(value);

      if (!this.root) {
        this.root = newNode;
        return this;
      }

      let current = this.root;

      while (true) {
        if (value === current.value) {
          return undefined; // Avoid duplicate values (you can modify this behavior as needed)
        }

        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }

    search(value) {
      let current = this.root;

      while (current) {
        if (value === current.value) {
          return current; // Found the node with the target value
        }

        if (value < current.value) {
          current = current.left;
        } else {
          current = current.right;
        }
      }

      return null; // Target value not found in the tree
    }
  }

  // Example usage:
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(3);
  bst.insert(7);
  bst.insert(12);
  bst.insert(18);

  const targetValue = 7;
  const resultNode = bst.search(targetValue);

  if (resultNode) {
    console.log(`Node with value ${targetValue} found in the tree.`);
  } else {
    console.log(`Node with value ${targetValue} not found in the tree.`);
  }
