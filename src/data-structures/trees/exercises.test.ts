import { beforeEach, describe, test, expect } from 'vitest';
import { BinaryTree } from './explanation';

describe('BinaryTree Exercises', () => {
  let tree: BinaryTree;
  beforeEach(() => {
    tree = new BinaryTree();
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
  });

  test('find value', () => {
    // @ts-ignore
    expect(tree.find(3)).toBe(true);
    // @ts-ignore
    expect(tree.find(10)).toBe(false);
  });

  test('height', () => {
    // @ts-ignore
    expect(tree.height()).toBe(2);
  });

  test('count nodes', () => {
    // @ts-ignore
    expect(tree.countNodes()).toBe(3);
  });
});
