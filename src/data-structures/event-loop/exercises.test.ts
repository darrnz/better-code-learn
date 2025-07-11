
import { describe, test, expect } from 'vitest';
// Event Loop Exercises Tests
// These are conceptual and code-based tests. You may need to manually check answers for explanations.

describe('Event Loop Exercises', () => {
  test('output order', () => {
    // The expected output order is: A, D, C, B
    expect(true).toBe(true); // Replace with actual check if needed
  });

  test('simulate event loop', () => {
    const results: string[] = [];
    function runLoop(tasks: (() => void)[]) {
      while (tasks.length) {
        const task = tasks.shift();
        if (task) task();
      }
    }
    runLoop([
      () => results.push('task1'),
      () => results.push('task2'),
    ]);
    expect(results).toEqual(['task1', 'task2']);
  });

  test('microtasks vs macrotasks', () => {
    // Answer should explain the difference between microtasks and macrotasks
    expect(true).toBe(true); // Manual check
  });
});
