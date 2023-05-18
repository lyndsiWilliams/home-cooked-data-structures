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

class HomeCookedBinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a new node
  insert(value) {
    const newNode = new BinaryNode(value);

    if (!this.root) {
      return (this.root = newNode);
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          // Go left
          if (!currentNode.left) return (currentNode.left = newNode);
          currentNode = currentNode.left;
        } else {
          // Go right
          if (!currentNode.right) return (currentNode.right = newNode);
          currentNode = currentNode.right;
        }
      }
    }
  }

  // Returns the node we're looking for, null if nothing found
  lookup(value) {
    if (!this.root) return null;

    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        // Go left
        if (currentNode.value === value) return currentNode;
        currentNode = currentNode.left;
      }
      // Go right
      if (currentNode.value === value) return currentNode;
      currentNode = currentNode.right;
    }

    return null;
  }

  // Remove a node
  remove(value) {
    if (!this.root) return false;

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        // Match, time to delete!

        // Option 1: No right child
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            // If parent > current value, make current left child a left child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              // If parent < current value, make current left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          // Option 2: Right child that has no left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;

          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            // If parent > current, make current right child the left child the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              // If parent < current, make current right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          // Option 3: Right child that has a left child
        } else {
          // Find the right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          // Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

const traverse = (node) => {
  const tree = { value: node.value };

  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);

  return tree;
};

module.exports = { HomeCookedBinarySearchTree, traverse };
