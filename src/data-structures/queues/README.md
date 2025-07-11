# Queue 🚌📥

## What is a Queue? 🤔
A queue is a simple data structure that stores items in a First-In-First-Out (FIFO) order. You add (enqueue) items at the end and remove (dequeue) items from the front.

Think of a queue like a line at a ticket counter: first person in is the first person out. 🎟️

---

## Key Points 🗝️
- FIFO: First item added is the first one removed. 🔄
- Only the front item is accessible for dequeue/peek operations. 🥇
- Used for scheduling, buffering, breadth-first search, and more. 🗂️

---

## When to Use a Queue 🕵️‍♂️
- When you need to process items in the order they arrive (e.g., print jobs, customer service). 🕒
- When you need to buffer data (e.g., network packets, task queues). 📦
- When you need to traverse structures level by level (e.g., BFS in trees/graphs). 🌳

---

## Example Usage (Step-by-Step) 🛠️
```js
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
```

---

## Summary 📝
Queues are perfect for managing ordered data with FIFO access. Use queues for scheduling, buffering, and level-order traversal in algorithms. 👍

---

## 🌐 Extra Resources
1. [Programiz: Queue Data Structure](https://www.programiz.com/dsa/queue)
2. [Visualgo: Queue Visualization](https://visualgo.net/en/list?slide=2)
