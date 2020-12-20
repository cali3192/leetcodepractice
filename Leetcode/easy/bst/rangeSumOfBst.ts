/**
 * Definition for a binary tree node.
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const rangeSumBST = (root: TreeNode, low: number, high: number): number => {
  return traverse(root, high, low, { total: 0 });
};

const traverse = (
  node: TreeNode["left"],
  low: number,
  high: number,
  sum: { total: number }
): any => {
  if (!node) {
    return;
  }

  //   const updatedSum = sum + node.val;

  if (node.val >= low && node.val <= high) {
    sum.total += node.val;
  }

  traverse(node.left, low, high, sum);
  traverse(node.right, low, high, sum);

  return sum.total;
};
