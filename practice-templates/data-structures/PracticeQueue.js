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

class PracticeQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // Look at the first node in the queue
  peek() {}

  // Add a node to the end of the queue
  enqueue(value) {}

  // Remove a node from the front of the queue
  dequeue() {}

  // Check if queue is empty
  isEmpty() {}
}

module.exports = PracticeQueue;
