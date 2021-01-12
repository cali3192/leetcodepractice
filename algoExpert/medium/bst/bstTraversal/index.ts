class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function inOrderTraverse(tree: BST | null, array: number[]) {
  // Write your code here.

  // the pattern we're looking at is left, then append node then traverse right
  if (!!tree) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }

  return array;
}

export function preOrderTraverse(tree: BST | null, array: number[]) {
  // Write your code here.
  if (!!tree) {
    array.push(tree.value);
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array);
  }

  return array;
}

export function postOrderTraverse(tree: BST | null, array: number[]) {
  // Write your code here.
  if (!!tree) {
    postOrderTraverse(tree.left, array);
    postOrderTraverse(tree.right, array);
    array.push(tree.value);
  }

  return array;
}
