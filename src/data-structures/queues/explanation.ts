
// Queue Explanation
// -----------------
// What is a Queue?
// - A queue is a simple data structure that stores items in a First-In-First-Out (FIFO) order.
// - You add (enqueue) items at the end and remove (dequeue) items from the front.
// - Think of a queue like a line at a ticket counter: first person in is the first person out.

// Key Points:
// - FIFO: First item added is the first one removed.
// - Only the front item is accessible for dequeue/peek operations.
// - Used for scheduling, buffering, breadth-first search, and more.

// When to Use a Queue:
// - When you need to process items in the order they arrive (e.g., print jobs, customer service).
// - When you need to buffer data (e.g., network packets, task queues).
// - When you need to traverse structures level by level (e.g., BFS in trees/graphs).

// Let's build a simple queue and walk through its main operations step by step.

export class Queue {
  private items: any[] = [];

  // Add an item to the end
  enqueue(item: any) {
    this.items.push(item);
  }

  // Remove and return the front item
  dequeue() {
    return this.items.shift();
  }

  // Peek at the front item
  peek() {
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Return the size of the queue
  size(): number {
    return this.items.length;
  }

  // Clear the queue
  clear(): void {
    this.items = [];
  }
}

// Example usage:


// Example usage (step-by-step):
// 1. Create a Queue instance
const queue = new Queue();

// 2. Add items to the queue
queue.enqueue(1); // Queue: [1]
queue.enqueue(2); // Queue: [1, 2]

// 3. Peek at the front item
console.log(queue.peek()); // Output: 1

// 4. Remove the front item
queue.dequeue(); // Queue: [2]
console.log(queue.peek()); // Output: 2

// 5. Check if the queue is empty
console.log(queue.isEmpty()); // Output: false

// 6. Get the size of the queue
console.log(queue.size()); // Output: 1

// 7. Clear the queue
queue.clear(); // Queue: []
console.log(queue.isEmpty()); // Output: true

// Summary:
// - Queues are perfect for managing ordered data with FIFO access.
// - Use queues for scheduling, buffering, and level-order traversal in algorithms.
