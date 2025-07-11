import { beforeEach, describe, test, expect } from 'vitest';
import { LinkedList } from './explanation';

describe('LinkedList Exercises', () => {
  let list: LinkedList;
  beforeEach(() => {
    list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
  });

  test('insert at beginning', () => {
    // @ts-ignore
    list.insertAtBeginning(0);
    expect(list.head?.value).toBe(0);
  });

  test('find value', () => {
    // @ts-ignore
    expect(list.find(2)).toBe(1);
    // @ts-ignore
    expect(list.find(4)).toBe(-1);
  });

  test('remove by value', () => {
    // @ts-ignore
    list.removeByValue(2);
    let values: any[] = [];
    let current = list.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    expect(values).toEqual([1, 3]);
  });
});
