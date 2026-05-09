// Stack Data Structure in JavaScript

class Stack {
  constructor() {
    this.items = [];
  }

  // Push element to stack
  push(element) {
    this.items.push(element);
  }

  // Remove top element
  pop() {
    if (this.isEmpty()) {
      return "Stack Underflow";
    }
    return this.items.pop();
  }

  // Get top element
  peek() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }
    return this.items[this.items.length - 1];
  }

  // Check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get stack size
  size() {
    return this.items.length;
  }

  // Print stack
  print() {
    console.log(this.items.join(" <- "));
  }

  // Clear stack
  clear() {
    this.items = [];
  }
}

// Example Usage

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print(); // 10 <- 20 <- 30

console.log("Top:", stack.peek()); // 30

console.log("Popped:", stack.pop()); // 30

stack.print(); // 10 <- 20

console.log("Size:", stack.size()); // 2

console.log("Empty:", stack.isEmpty()); // false

stack.clear();

console.log("Empty after clear:", stack.isEmpty()); // true
