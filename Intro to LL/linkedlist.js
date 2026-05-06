// Simple Linked List Introduction in JavaScript

// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Linked List class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at end
  insert(data) {
    const newNode = new Node(data);

    // If list is empty
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    // Traverse till last node
    let temp = this.head;

    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = newNode;
  }

  // Display linked list
  display() {
    let temp = this.head;

    while (temp !== null) {
      process.stdout.write(temp.data + " -> ");
      temp = temp.next;
    }

    console.log("null");
  }
}

// Create linked list
const list = new LinkedList();

list.insert(10);
list.insert(20);
list.insert(30);

// Print list
list.display();
