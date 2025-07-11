import { beforeEach, describe, test, expect } from 'vitest';
import { Queue } from './explanation';

describe('Queue Exercises', () => {
  let queue: Queue;
  beforeEach(() => {
    queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
  });

  test('is empty', () => {
    queue.clear();
    expect(queue.isEmpty()).toBe(true);
  });

  test('size', () => {
    expect(queue.size()).toBe(2);
  });

  test('clear', () => {
    queue.clear();
    expect(queue.size()).toBe(0);
  });
});
