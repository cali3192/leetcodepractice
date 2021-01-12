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

export function invertBinaryTree(tree: BinaryTree | null) {
  // Write your code here.

  // if at leaf, return
  if (!tree) return;

  // else

  // swap
  swap(tree);

  // call invert on left and right child
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}

const swap = (tree: BinaryTree) => {
  // store left in reference
  const left = tree.left;

  // update left to be right tree
  tree.left = tree.right;

  // update right to be left tree
  tree.right = left;
};
