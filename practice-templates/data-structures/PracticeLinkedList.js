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
  append(value) {}

  // Add a new node to the beginning of the linked list
  prepend(value) {}

  // Traverse to a specified index
  traverseToIndex(index) {}

  // Insert a new node at a specified index
  insert(index, value) {
    // If index >= length, add to the end
    // Create a new node with the specified value
    // Get the node at the specified index
    // Hold a reference of the node after the leaderNode
    // Insert new node at index
    // Set new node's next to the node after
  }

  remove(index) {}
}

const linkedList = new HomeCookedLinkedList(10);
console.log("Create -", linkedList);
linkedList.append(5);
console.log("Append-1 -", linkedList);
linkedList.append(16);
console.log("Append-2 -", linkedList);
linkedList.prepend(1);
console.log("Prepend -", linkedList);
linkedList.insert(2, 42);
console.log("Insert -", linkedList);
linkedList.remove(2);
console.log("Remove -", linkedList);