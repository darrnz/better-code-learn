import { beforeEach, describe, test, expect } from 'vitest';
import { HashTable } from './explanation';

describe('HashTable Exercises', () => {
  let ht: HashTable;
  beforeEach(() => {
    ht = new HashTable();
    ht.set('a', 1);
    ht.set('b', 2);
  });

  test('key exists', () => {
    // @ts-ignore
    expect(ht.has('a')).toBe(true);
    // @ts-ignore
    expect(ht.has('c')).toBe(false);
  });

  test('get all keys', () => {
    // @ts-ignore
    expect(ht.keys().sort()).toEqual(['a', 'b']);
  });

  test('clear table', () => {
    // @ts-ignore
    ht.clear();
    // @ts-ignore
    expect(ht.keys()).toEqual([]);
  });
});
