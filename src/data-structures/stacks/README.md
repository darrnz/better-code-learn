# Stack 🥞📚

## What is a Stack? 🤔
A stack is a simple data structure that stores items in a Last-In-First-Out (LIFO) order. You can only add (push) or remove (pop) items from the top of the stack.

Think of a stack like a pile of plates: you add to the top, and you remove from the top. 🍽️

---

## Key Points 🗝️
- LIFO: Last item added is the first one removed. 🔄
- Only the top item is accessible for push/pop/peek operations. 🥇
- Used for undo features, parsing expressions, function call management, and more. 🧠

---

## When to Use a Stack 🕵️‍♂️
- When you need to reverse items (e.g., undo history). ↩️
- When you need to process nested structures (e.g., parentheses matching). 🧩
- When you need to manage function calls (call stack in programming languages). 📞

---

## Example Usage (Step-by-Step) 🛠️
```js
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
```

---

## Summary 📝
Stacks are simple but powerful for managing ordered data with LIFO access. Use stacks for undo features, parsing, and managing nested or recursive operations. 👍

---

## 🌐 Extra Resources
1. [Programiz: Stack Data Structure](https://www.programiz.com/dsa/stack)
2. [Visualgo: Stack Visualization](https://visualgo.net/en/list?slide=1)
