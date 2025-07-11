// Arrays Explanation
// An array is a linear data structure that stores elements in a contiguous block of memory.
// Arrays allow fast access by index and are useful for storing ordered collections.
// Let's walk through a simple example step by step.

export function arrayExample() {
  const arr = [1, 2, 3]; // Create an array with three elements

  // Access elements by index
  console.log(arr[0]); // Output: 1
  console.log(arr[1]); // Output: 2
  console.log(arr[2]); // Output: 3

  // Add an element to the end
  arr.push(4); // arr is now [1, 2, 3, 4]

  // Remove the last element
  arr.pop(); // arr is now [1, 2, 3]

  // Step-by-step:
  // 1. We create an array.
  // 2. We access elements by index.
  // 3. We add and remove elements.
  // Arrays are great for ordered data and fast access by position.
}
