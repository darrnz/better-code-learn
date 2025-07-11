
// Linked List Explanation
// ----------------------
// What is a Linked List?
// - A linked list is a data structure made of nodes, where each node stores a value and a pointer to the next node.
// - Unlike arrays, linked lists do not store elements in contiguous memory.
// - Think of a linked list like a chain: each link (node) points to the next.

// Key Points:
// - Dynamic size: easy to grow and shrink.
// - Efficient insertions/removals anywhere in the list.
// - Used for queues, stacks, and dynamic memory management.

// When to Use a Linked List:
// - When you need frequent insertions/removals (not just at the end).
// - When you don't know the size in advance or need to grow/shrink dynamically.
// - When you want to avoid shifting elements (like in arrays).

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

// Example usage (step-by-step):
// 1. Create a LinkedList instance
const list = new LinkedList();

// 2. Add values to the list
list.append(1); // List: 1
list.append(2); // List: 1 -> 2
list.append(3); // List: 1 -> 2 -> 3

// 3. Print the list
list.print(); // Output: 1 -> 2 -> 3

// 4. Remove or insert nodes (if implemented)
// (Try adding methods for insert/remove for practice)

// Summary:
// - Linked lists are great for dynamic data and efficient insertions/removals.
// - Use linked lists when you need flexibility and don't want to shift elements like arrays.

// 🌐 Extra Resources
// 1. Visualgo: Linked List Visualization - https://visualgo.net/en/list
// 2. GeeksforGeeks: Linked List Data Structure - https://www.geeksforgeeks.org/data-structures/linked-list/
