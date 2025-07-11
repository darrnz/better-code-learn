// Tree Explanation
// A tree is a hierarchical data structure with nodes, where each node can have children.
// The top node is called the root. Trees are used for representing hierarchical relationships.
// Let's build a simple binary tree and walk through its main operations step by step.

export class TreeNode {
  value: any;
  left: TreeNode | null = null;
  right: TreeNode | null = null;
  constructor(value: any) {
    this.value = value;
  }
}

export class BinaryTree {
  root: TreeNode | null = null;

  // Insert a value (simple version, no balancing)
  insert(value: any) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  // In-order traversal (left, root, right)
  inOrder(node: TreeNode | null = this.root, result: any[] = []) {
    if (!node) return result;
    this.inOrder(node.left, result);
    result.push(node.value);
    this.inOrder(node.right, result);
    return result;
  }
}

// Example usage:
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
console.log(tree.inOrder()); // Output: [3, 5, 7]

// Step-by-step:
// 1. We create a BinaryTree instance.
// 2. We insert values, which creates nodes and links them.
// 3. We traverse the tree in order to see the sorted values.
// Trees are great for hierarchical data, searching, and sorting.
