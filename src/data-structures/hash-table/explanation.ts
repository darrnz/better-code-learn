// Hash Table Explanation
// A hash table stores key-value pairs and uses a hash function to compute an index for storing data efficiently.
// It allows fast lookup, insertion, and deletion.
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
const ht = new HashTable();
ht.set('name', 'Alice'); // Adds key 'name' with value 'Alice'
ht.set('age', 30); // Adds key 'age' with value 30
console.log(ht.get('name')); // Output: Alice
ht.remove('age'); // Removes key 'age'

// Step-by-step:
// 1. We create a HashTable instance.
// 2. We set key-value pairs.
// 3. We get values by key.
// 4. We remove keys.
// Hash tables are great for fast data retrieval by key.
