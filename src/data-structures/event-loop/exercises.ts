// Event Loop Exercises
// Try to answer or implement the following:


// 1. What will be the output order of the following code?
//    console.log('A');
//    setTimeout(() => console.log('B'), 0);
//    Promise.resolve().then(() => console.log('C'));
//    console.log('D');
export const outputOrder = () => {
  // Your answer: return an array of strings in the order they are logged
  // Example: return ['A', 'D', 'C', 'B'];
  return [];
};

// 2. Implement a function that simulates a simple event loop using an array of tasks.
export const runLoop = (tasks: (() => void)[]): void => {
  // Your code here
};

// 3. Explain the difference between microtasks and macrotasks in the event loop.
export const explainMicroMacro = (): string => {
  // Your explanation here
  return '';
};
