/*
  Lookup:   O(log N)
  Insert:   O(log N)
  Delete:   O(log N)
*/

class BinaryNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class PracticeBinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a new node
  insert(value) {}

  // Returns the node we're looking for, null if nothing found
  lookup(value) {}

  // Remove a node
  remove(value) {}
}

const traverse = (node) => {
  const tree = { value: node.value };

  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);

  return tree;
};

module.exports = { PracticeBinarySearchTree, traverse };
