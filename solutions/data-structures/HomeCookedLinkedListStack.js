/* ---- LIFO ----
  Lookup:   O(n)
  Pop:      O(1)
  Push:     O(1)
  Peek:     O(1)
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class HomeCookedLinkedListStack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // Returns the top node
  peek() {
    return this.top;
  }

  // Add a node to the top of a stack
  push(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdNode = this.top;

      this.top = newNode;
      this.top.next = holdNode;
    }

    this.length++;
    return this;
  }

  // Remove a node from the top of a stack
  pop() {
    if (!this.top) return null;

    if (this.top === this.bottom) this.bottom = null;

    const removedNode = this.top;

    this.top = this.top.next;
    this.length--;

    return removedNode;
  }

  // Check if the stack is empty
  isEmpty() {
    return !this.length;
  }
}

module.exports = HomeCookedLinkedListStack;
