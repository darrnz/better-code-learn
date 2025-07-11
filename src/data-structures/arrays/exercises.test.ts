import { sumArray, reverseArray, maxArray } from './exercises';
import { describe, it, expect } from 'vitest';

describe('Arrays Exercises', () => {
  it('sumArray should return the sum of all elements', () => {
    expect(sumArray([1, 2, 3])).toBe(6);
    expect(sumArray([-1, 1, 0])).toBe(0);
  });

  it('reverseArray should reverse the array', () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
    expect(reverseArray(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
  });

  it('maxArray should return the maximum value', () => {
    expect(maxArray([1, 2, 3])).toBe(3);
    expect(maxArray([-1, -2, -3])).toBe(-1);
  });
});
