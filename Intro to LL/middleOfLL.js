//leetcode.com/problems/middle-of-the-linked-list/

var middleNode = function (head) {
  let fast = head;
  let slow = head;

  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
};

// Two Pointer Technique
// Tortoise and Hare Algorithm
