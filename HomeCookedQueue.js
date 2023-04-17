/* ---- FIFO ----
  Lookup:   O(n)
  Enqueue:  O(1)
  Dequeue:  O(1)
  Peek:     O(1)
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class HomeCookedQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // Look at the first node in the queue
  peek() {
    console.log("Peek -", this.first);
    return this.first;
  }

  // Add a node to the end of the queue
  enqueue(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    console.log("Enqueue -", this);
    return this;
  }

  // Remove a node from the front of the queue
  dequeue() {
    if (!this.first) return null;

    if (this.first === this.last) this.last === null;

    this.first = this.first.next;
    this.length--;

    console.log("Dequeue -", this);
    return this;
  }

  // Check if queue is empty
  isEmpty() {
    console.log("isEmpty -", !this.length);
    return !this.length;
  }
}

const testQueue = new HomeCookedQueue();
testQueue.enqueue(42);
testQueue.enqueue(43);
testQueue.enqueue(44);
testQueue.dequeue();
testQueue.isEmpty();
testQueue.peek();
