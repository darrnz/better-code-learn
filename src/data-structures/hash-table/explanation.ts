
// Hash Table Explanation
// ---------------------
// What is a Hash Table?
// - A hash table is a data structure that stores key-value pairs for fast lookup.
// - It uses a hash function to convert keys into indices for efficient storage and retrieval.
// - Think of a hash table like a dictionary: you look up a word (key) to find its meaning (value).

// Key Points:
// - Fast lookup, insertion, and deletion by key.
// - Keys are unique; values can be anything.
// - Used for dictionaries, caches, sets, and more.

// When to Use a Hash Table:
// - When you need to quickly find, add, or remove items by key.
// - When you need to store unique keys and associated values.
// - When you need to avoid searching through all items (like in arrays).

// Let's build a simple hash table step by step.

export class HashTable {
  private table: { [key: string]: any } = {};

  // Insert a key-value pair
  set(key: string, value: any) {
    this.table[key] = value;
  }

  // Retrieve a value by key
  get(key: string) {
    return this.table[key];
  }

  // Remove a key-value pair
  remove(key: string) {
    delete this.table[key];
  }
}

// Example usage:

// Example usage (step-by-step):
// 1. Create a HashTable instance
const ht = new HashTable();

// 2. Add key-value pairs
ht.set('name', 'Alice'); // Table: { name: 'Alice' }
ht.set('age', 30); // Table: { name: 'Alice', age: 30 }

// 3. Get a value by key
console.log(ht.get('name')); // Output: Alice

// 4. Remove a key-value pair
ht.remove('age'); // Table: { name: 'Alice' }

// Summary:
// - Hash tables are perfect for fast data retrieval by key.
// - Use hash tables for dictionaries, caches, and any situation where you need quick access by key.
// 🌐 Extra Resources
// 1. Khan Academy: Hash Tables - https://www.khanacademy.org/computing/computer-science/algorithms/hash-tables/a/hash-tables-intro
// 2. Interview Cake: Hash Table Guide - https://www.interviewcake.com/concept/javascript/hash-table
