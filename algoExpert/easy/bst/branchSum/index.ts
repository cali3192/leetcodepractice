// This is the class of the input root.
// Do not edit it.
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

export function branchSums(root: BinaryTree): number[] {
  // Write your code here.

  // declare sums in scope so it can be udpated
  const sums: number[] = [];

  // pass in initial values to helper
  updateBranchSum(root, 0, sums);

  // return sums arr
  return sums;
  // return [-1];
}

const updateBranchSum = (
  node: BinaryTree["left"],
  sum: number,
  result: number[]
): any => {
  // break if null
  if (!node) {
    return;
  }

  // update sum to be sum plus node
  const updatedSum = sum + node.value;

  // if at leaf, push result
  if (!node.left && !node.right) {
    result.push(updatedSum);
    return;
  }

  // pass left and right (cant use returns or && for this)
  updateBranchSum(node.left, updatedSum, result);
  updateBranchSum(node.right, updatedSum, result);
};
