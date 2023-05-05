/* ---- LIFO ----
  Lookup:   O(n)
  Pop:      O(1)
  Push:     O(1)
  Peek:     O(1)
*/

class PracticeArrayStack {
  constructor() {
    this.array = [];
  }

  // Returns the top element
  peek() {}

  // Add an element to the top of a stack
  push(value) {}

  // Remove an element from the top of a stack
  pop() {}

  // Check if the stack is empty
  isEmpty() {}
}

const testArrayStack = new PracticeArrayStack();
testArrayStack.isEmpty();
testArrayStack.push(42);
testArrayStack.push(43);
testArrayStack.push(44);
testArrayStack.pop();
testArrayStack.isEmpty();
console.log(testArrayStack);
testArrayStack.peek();
