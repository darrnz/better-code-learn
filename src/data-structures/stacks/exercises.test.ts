import { beforeEach, describe, test, expect } from 'vitest';
import { Stack } from './explanation';

describe('Stack Exercises', () => {
  let stack: Stack;
  beforeEach(() => {
    stack = new Stack();
    stack.push(1);
    stack.push(2);
  });

  test('is empty', () => {
    // @ts-ignore
    stack.clear();
    // @ts-ignore
    expect(stack.isEmpty()).toBe(true);
  });

  test('size', () => {
    // @ts-ignore
    expect(stack.size()).toBe(2);
  });

  test('clear', () => {
    // @ts-ignore
    stack.clear();
    // @ts-ignore
    expect(stack.size()).toBe(0);
  });
});
