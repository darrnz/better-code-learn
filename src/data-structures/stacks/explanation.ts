// Stack Explanation
// A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle.
// You can only add or remove elements from the top of the stack.
// Let's build a simple stack and walk through its main operations step by step.

export class Stack {
  private items: any[] = [];

  // Add an item to the top
  push(item: any) {
    this.items.push(item);
  }

  // Remove and return the top item
  pop() {
    return this.items.pop();
  }

  // Peek at the top item
  peek() {
    return this.items[this.items.length - 1];
  }
}

// Example usage:
const stack = new Stack();
stack.push(1); // Adds 1
stack.push(2); // Adds 2
console.log(stack.peek()); // Output: 2
stack.pop(); // Removes 2
console.log(stack.peek()); // Output: 1

// Step-by-step:
// 1. We create a Stack instance.
// 2. We push items onto the stack.
// 3. We peek at the top item.
// 4. We pop items off the stack.
// Stacks are great for undo features, parsing, and more.
