class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // result is in an array
  const result = [];

  // based on the result, its clear its a depth first search
  const traverse = (root, sum, arr) => {
    // exit if root is null
    if (!root) return;

    // updated sum that will be passed
    const updatedSum = root.value + sum;

    // if at a leaf, update
    if (!root.left && !root.right) {
      result.push(updatedSum);
      return;
    }

    // traverse down left and right side
    traverse(root.left, updatedSum, arr);
    traverse(root.right, updatedSum, arr);
  };

  traverse(root, 0, result);

  return result;
}
