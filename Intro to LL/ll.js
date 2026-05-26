class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtFirst(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtLast(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = newNode;
  }

  printLinkedList() {
    if (this.head === null) {
      console.log("Empty List!");
      return;
    }
    let temp = this.head;
    while (temp != null) {
      process.stdout.write(temp.val + "->");
      temp = temp.next;
    }
    console.log("null");
  }

  deleteAtFirst() {
    if (this.head === null) {
      console.log("Empty List, nothing to delete!");
      return;
    }
    this.head = this.head.next;
  }

  deleteAtLast() {
    if (this.head === null) {
      console.log("Empty List, nothing to delete!");
      return;
    }
    let temp = this.head;
    while (temp.next.next != null) {
      temp = temp.next;
    }
    temp.next = null;
  }
}

let obj = new LinkedList();
obj.insertAtFirst(1);
obj.insertAtFirst(2);
obj.insertAtLast(3);
obj.printLinkedList();
obj.deleteAtLast();
obj.printLinkedList();
