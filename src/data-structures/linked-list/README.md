# Linked List 🔗📃

## What is a Linked List? 🤔
A linked list is a data structure made of nodes, where each node stores a value and a pointer to the next node. Unlike arrays, linked lists do not store elements in contiguous memory.

Think of a linked list like a chain: each link (node) points to the next. ⛓️

---

## Key Points 🗝️
- Dynamic size: easy to grow and shrink. 🌱
- Efficient insertions/removals anywhere in the list. ✂️
- Used for queues, stacks, and dynamic memory management. 🧠

---

## When to Use a Linked List 🕵️‍♂️
- When you need frequent insertions/removals (not just at the end). 🔄
- When you don't know the size in advance or need to grow/shrink dynamically. 📏
- When you want to avoid shifting elements (like in arrays). 🚚

---

## Example Usage (Step-by-Step) 🛠️
```js
// 1. Create a LinkedList instance
const list = new LinkedList();

// 2. Add values to the list
list.append(1); // List: 1
list.append(2); // List: 1 -> 2
list.append(3); // List: 1 -> 2 -> 3

// 3. Print the list
list.print(); // Output: 1 -> 2 -> 3
```

---

## Summary 📝
Linked lists are great for dynamic data and efficient insertions/removals. Use linked lists when you need flexibility and don't want to shift elements like arrays. 👍

---

## 🌐 Extra Resources
1. [Visualgo: Linked List Visualization](https://visualgo.net/en/list)
2. [GeeksforGeeks: Linked List Data Structure](https://www.geeksforgeeks.org/data-structures/linked-list/)
