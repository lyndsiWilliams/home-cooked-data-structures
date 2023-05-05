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

const testBST = new PracticeBinarySearchTree();
console.log("Lookup -", testBST.lookup(201));
testBST.insert(9);
testBST.insert(4);
testBST.insert(6);
testBST.insert(20);
testBST.insert(170);
testBST.insert(15);
testBST.insert(1);

console.log("Lookup -", testBST.lookup(20));
testBST.remove(9);

console.log(traverse(testBST.root));
