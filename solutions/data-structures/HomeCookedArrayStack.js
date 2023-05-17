/* ---- LIFO ----
  Lookup:   O(n)
  Pop:      O(1)
  Push:     O(1)
  Peek:     O(1)
*/

class HomeCookedArrayStack {
  constructor() {
    this.array = [];
  }

  // Returns the top element
  peek() {
    return this.array[this.array.length - 1];
  }

  // Add an element to the top of a stack
  push(value) {
    this.array.push(value);

    return this.array;
  }

  // Remove an element from the top of a stack
  pop() {
    this.array.pop();

    return this.array;
  }

  // Check if the stack is empty
  isEmpty() {
    return !this.array.length;
  }
}

module.exports = HomeCookedArrayStack;
