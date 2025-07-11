// Queue Explanation
// A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle.
// You add elements at the end and remove them from the front.
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
const queue = new Queue();
queue.enqueue(1); // Adds 1
queue.enqueue(2); // Adds 2
console.log(queue.peek()); // Output: 1
queue.dequeue(); // Removes 1
console.log(queue.peek()); // Output: 2

// Step-by-step:
// 1. We create a Queue instance.
// 2. We enqueue items.
// 3. We peek at the front item.
// 4. We dequeue items from the front.
// Queues are great for scheduling, buffering, and more.
