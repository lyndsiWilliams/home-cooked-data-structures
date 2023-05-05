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

class PracticeLinkedListStack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // Returns the top node
  peek() {}

  // Add a node to the top of a stack
  push(value) {}

  // Remove a node from the top of a stack
  pop() {}

  // Check if the stack is empty
  isEmpty() {}
}

const testStack = new PracticeLinkedListStack();

testStack.isEmpty();
testStack.push(42);
testStack.push(43);
testStack.push(44);
testStack.pop();
console.log(testStack);
testStack.peek();
testStack.isEmpty();
