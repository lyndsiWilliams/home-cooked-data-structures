/*
  Prepend:  O(1)
  Append:   O(1)
  Lookup:   O(n)
  Insert:   O(n)
  Delete:   O(n)
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class HomeCookedLinkedList {
  constructor(value, ...moreValues) {
    this.head = new Node(value);

    this.tail = this.head;
    this.length = 1;

    if (moreValues) {
      for (let i = 0; i < moreValues.length; i++) this.append(moreValues[i]);
    }
  }

  // Print an array of the linked list's values
  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(array);
  }

  // Add a new node to the end of the linked list
  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  // Add a new node to the beginning of the linked list
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  // Traverse to a specified index
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  // Insert a new node at a specified index
  insert(index, value) {
    // If index >= length, add to the end
    if (index >= this.length) {
      return this.append(value);
    }
    // Create a new node with the specified value
    const newNode = new Node(value);

    // Get the node at the specified index
    const leaderNode = this.traverseToIndex(index - 1);

    // Hold a reference of the node after the leaderNode
    const nextNode = leaderNode.next;

    // Insert new node at index
    leaderNode.next = newNode;
    // Set new node's next to the node after
    newNode.next = nextNode;
    this.length++;

    return this;
  }

  remove(index) {
    const previousNode = this.traverseToIndex(index - 1);
    const nextNode = this.traverseToIndex(index + 1);

    previousNode.next = nextNode;
    this.length--;

    return this;
  }
}

module.exports = HomeCookedLinkedList;
