// ==========================================
// File: linkedList.js
// Advanced Linked List Boilerplate in JS
// ==========================================

// ---------------- NODE ----------------
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// ------------ LINKED LIST -------------
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // ---------- INSERTIONS ----------

  // Insert at beginning
  insertAtHead(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;

    this.size++;
  }

  // Insert at end
  insertAtTail(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.size++;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
    this.size++;
  }

  // Insert at specific index
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid Index");
      return;
    }

    if (index === 0) {
      this.insertAtHead(data);
      return;
    }

    const newNode = new Node(data);

    let current = this.head;
    let previous = null;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    previous.next = newNode;
    newNode.next = current;

    this.size++;
  }

  // ---------- DELETIONS ----------

  // Delete first node
  removeHead() {
    if (!this.head) return null;

    this.head = this.head.next;
    this.size--;
  }

  // Delete last node
  removeTail() {
    if (!this.head) return null;

    if (!this.head.next) {
      this.head = null;
      this.size--;
      return;
    }

    let current = this.head;

    while (current.next.next) {
      current = current.next;
    }

    current.next = null;
    this.size--;
  }

  // Delete by value
  removeByValue(value) {
    if (!this.head) return;

    if (this.head.data === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;

    while (current.next && current.next.data !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      this.size--;
    }
  }

  // ---------- SEARCH ----------

  search(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === value) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }

  // ---------- REVERSE ----------

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next;

      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  // ---------- MIDDLE NODE ----------

  findMiddle() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow ? slow.data : null;
  }

  // ---------- DETECT LOOP ----------

  hasCycle() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return true;
      }
    }

    return false;
  }

  // ---------- DISPLAY ----------

  printList() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }

    result += "null";

    console.log(result);
  }

  // ---------- CLEAR LIST ----------

  clear() {
    this.head = null;
    this.size = 0;
  }

  // ---------- GET SIZE ----------

  getSize() {
    return this.size;
  }
}

// ==========================================
// USAGE
// ==========================================

const list = new LinkedList();

list.insertAtHead(10);
list.insertAtHead(20);

list.insertAtTail(30);
list.insertAtTail(40);

list.insertAt(25, 2);

list.printList();

// Search
console.log("Index:", list.search(30));

// Middle Node
console.log("Middle:", list.findMiddle());

// Reverse
list.reverse();

console.log("Reversed:");
list.printList();

// Delete
list.removeByValue(25);

console.log("After Deletion:");
list.printList();

// Size
console.log("Size:", list.getSize());

// Cycle Check
console.log("Cycle Exists:", list.hasCycle());
