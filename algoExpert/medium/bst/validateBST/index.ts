// This is an input class. Do not edit.
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

export function validateBst(tree: BST) {
  // Write your code here.

  // define traverse helper, initialize with node, minVal and maxVal
  const result = traverseAndValidate(
    tree,
    Number.MIN_SAFE_INTEGER,
    Number.MAX_SAFE_INTEGER
  );

  return result;

  return false;
}

// helper

const traverseAndValidate = (
  node: BST["left"],
  min: number,
  max: number
): any => {
  // if !node
  // return true
  if (!node) return true;

  // if  left > node.val || node.val > right, return false
  if (min > node.value || node.value >= max) return false;

  // else , traverse on left
  const isLeftValid: boolean = traverseAndValidate(node.left, min, node.value);

  //  right > node.val, traverse on right
  return isLeftValid && traverseAndValidate(node.right, node.value, max);
};
