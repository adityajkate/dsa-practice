class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  InsertAtFirst(val) {
    this.size++;
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtLast(val) {
    this.size++;
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = newNode;
  }

  deleteAtFirst() {
    if (this.head == null) {
      return;
    }
    this.size--;
    this.head = this.head.next;
  }

  printLinkedList() {
    let temp = this.head;
    while (temp !== null) {
      process.stdout.write(temp.val + "->");
      temp = temp.next;
    }
    console.log("null");
  }
}

let obj = new LinkedList();
obj.InsertAtFirst(10);
obj.InsertAtFirst(20);
obj.InsertAtFirst(30);
obj.InsertAtFirst(40);
obj.insertAtLast(56);
obj.deleteAtFirst();

obj.printLinkedList();
