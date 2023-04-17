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
    console.log("Peek -", this.array[this.array.length - 1]);
    return this.array[this.array.length - 1];
  }

  // Add an element to the top of a stack
  push(value) {
    this.array.push(value);

    console.log("Push -", this.array);
    return this.array;
  }

  // Remove an element from the top of a stack
  pop() {
    this.array.pop();

    console.log("Pop -", this.array);
    return this.array;
  }

  // Check if the stack is empty
  isEmpty() {
    console.log("isEmpty -", !this.array.length);
    return !this.array.length;
  }
}

const testArrayStack = new HomeCookedArrayStack();
testArrayStack.isEmpty();
testArrayStack.push(42);
testArrayStack.push(43);
testArrayStack.push(44);
testArrayStack.pop();
testArrayStack.isEmpty();
console.log(testArrayStack);
testArrayStack.peek();
