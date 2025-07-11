
// Stack Explanation
// -----------------
// What is a Stack?
// - A stack is a simple data structure that stores items in a Last-In-First-Out (LIFO) order.
// - You can only add (push) or remove (pop) items from the top of the stack.
// - Think of a stack like a pile of plates: you add to the top, and you remove from the top.

// Key Points:
// - LIFO: Last item added is the first one removed.
// - Only the top item is accessible for push/pop/peek operations.
// - Used for undo features, parsing expressions, function call management, and more.

// When to Use a Stack:
// - When you need to reverse items (e.g., undo history).
// - When you need to process nested structures (e.g., parentheses matching).
// - When you need to manage function calls (call stack in programming languages).

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

  // Check if the stack is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Get the number of items in the stack
  size(): number {
    return this.items.length;
  }

  // Clear all items from the stack
  clear(): void {
    this.items = [];
  }
}


// Example usage (step-by-step):
// 1. Create a Stack instance
const stack = new Stack();

// 2. Add items to the stack
stack.push(1); // Stack: [1]
stack.push(2); // Stack: [1, 2]

// 3. Peek at the top item
console.log(stack.peek()); // Output: 2

// 4. Remove the top item
stack.pop(); // Stack: [1]
console.log(stack.peek()); // Output: 1

// 5. Check if the stack is empty
console.log(stack.isEmpty()); // Output: false

// 6. Get the size of the stack
console.log(stack.size()); // Output: 1

// 7. Clear the stack
stack.clear(); // Stack: []
console.log(stack.isEmpty()); // Output: true

// Summary:
// - Stacks are simple but powerful for managing ordered data with LIFO access.
// - Use stacks for undo features, parsing, and managing nested or recursive operations.

// 🌐 Extra Resources
// 1. Programiz: Stack Data Structure - https://www.programiz.com/dsa/stack
// 2. Visualgo: Stack Visualization - https://visualgo.net/en/list?slide=1
