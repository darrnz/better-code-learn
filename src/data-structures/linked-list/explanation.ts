// Linked List Explanation
// A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node.
// This allows efficient insertion and removal of elements from any position.
// Let's build a simple singly linked list and walk through the main operations step by step.

export class ListNode {
  value: any;
  next: ListNode | null;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  head: ListNode | null = null;

  // Add a new node at the end
  append(value: any) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Print all values in the list
  print() {
    let current = this.head;
    const values: any[] = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(' -> '));
  }
}

// Example usage:
const list = new LinkedList();
list.append(1); // Adds 1
list.append(2); // Adds 2
list.append(3); // Adds 3
list.print(); // Output: 1 -> 2 -> 3

// Step-by-step:
// 1. We create a LinkedList instance.
// 2. We append values, which creates nodes and links them.
// 3. We print the list to see the order of elements.
// Linked lists are great for dynamic data where frequent insertions/removals are needed.
