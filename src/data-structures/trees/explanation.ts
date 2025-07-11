
// Tree Explanation
// ----------------
// What is a Tree?
// - A tree is a hierarchical data structure made of nodes, where each node can have children.
// - The top node is called the root; nodes below are children.
// - Think of a tree like a family tree or a folder structure on your computer.

// Key Points:
// - Hierarchical: nodes are connected in parent-child relationships.
// - Used for organizing data, searching, and sorting.
// - Binary trees have at most two children per node.

// When to Use a Tree:
// - When you need to represent hierarchical data (e.g., organization charts, file systems).
// - When you need efficient searching and sorting (e.g., binary search trees).
// - When you need to traverse data in different orders (preorder, inorder, postorder).

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

// Example usage (step-by-step):
// 1. Create a BinaryTree instance
const tree = new BinaryTree();

// 2. Insert values
tree.insert(5); // Tree: 5
tree.insert(3); // Tree:   5
                //        /
                //       3
tree.insert(7); // Tree:   5
                //      /   \
                //     3     7

// 3. Traverse the tree in order
console.log(tree.inOrder()); // Output: [3, 5, 7]

// Summary:
// - Trees are great for organizing hierarchical data and efficient searching/sorting.
// - Use trees for file systems, organization charts, and algorithms like searching and sorting.

// 🌐 Extra Resources
// 1. Visualgo: Tree Visualization - https://visualgo.net/en/bst
// 2. GeeksforGeeks: Tree Data Structure - https://www.geeksforgeeks.org/binary-tree-data-structure/
