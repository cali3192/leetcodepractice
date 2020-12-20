// This is the class of the input binary tree.
class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

type Stack = {
  node: BinaryTree["left"];
  depth: number;
};

// breath first
export function nodeDepths(root: BinaryTree) {
  // Write your code here.
  // define your result
  let result = 0;

  // keep track of nodes and depth using a stack
  const stack: Stack[] = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    // get the last depth and node from stack
    const { node, depth } = stack.pop() as Stack;

    if (node === null) continue;
    result += depth;

    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }

  return result;
}

// depth first
export function nodeDepths(root: BinaryTree) {
  // Write your code here.
  const res = updateSumDepth(root, 0);

  return res;
}

const updateSumDepth = (root: BinaryTree["left"], depth: number): any => {
  if (!root) return 0;

  console.log(`\n\n `, { depth });

  return (
    depth +
    updateSumDepth(root.left, depth + 1) +
    updateSumDepth(root.right, depth + 1)
  );
};
