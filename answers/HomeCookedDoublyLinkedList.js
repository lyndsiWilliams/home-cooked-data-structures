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
    this.prev = null;
    this.next = null;
  }
}

class HomeCookedDoublyLinkedList {
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
  append(value, ...moreValues) {
    const newNode = new Node(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    if (moreValues) {
      for (let i = 0; i < moreValues.length; i++) this.append(moreValues[i]);
    }
    return this.printList();
  }

  // Add a new node to the beginning of the linked list
  prepend(value, ...moreValues) {
    const newNode = new Node(value);

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    if (moreValues) {
      for (let i = 0; i < moreValues.length; i++) this.prepend(moreValues[i]);
    }

    return this.printList();
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
    // Reassign the prev of newNode and prevNode
    newNode.prev = leaderNode;
    nextNode.prev = newNode;
    this.length++;

    return this.printList();
  }

  remove(index) {
    const previousNode = this.traverseToIndex(index - 1);
    const nextNode = this.traverseToIndex(index + 1);

    previousNode.next = nextNode;
    nextNode.prev = previousNode;
    this.length--;

    return this.printList();
  }

  reverse() {
    if (!this.head.next) return this.head;

    let first = this.head;

    this.tail = this.head;

    let second = first.next;

    while (second) {
      const temp = second.next;

      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;

    return this.printList();
  }
}

const doublyLinkedList = new HomeCookedDoublyLinkedList(42);
doublyLinkedList.printList();
doublyLinkedList.append(43);
doublyLinkedList.prepend(41);
doublyLinkedList.insert(2, 42.5);
doublyLinkedList.remove(2);
doublyLinkedList.reverse();
console.log(doublyLinkedList);
