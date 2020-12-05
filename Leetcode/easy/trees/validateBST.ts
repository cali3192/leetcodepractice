/**
 * 98. Valid BST
 *
 * @param root
 *
 * Given a binary tree, determine if it is a valid binary search tree (BST).
 * Assume a BST is defined as follows: The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 *
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

/**
 *
 * @param root
 */

function isValidBST(root: TreeNode | null): boolean {
  //
  const traverse = (
    node: TreeNode,
    lowerLimit: number,
    upperLimit: number
  ): boolean => {
    if (!node) {
      return true;
    }

    if (node.val <= lowerLimit || node.val >= upperLimit) {
      return false;
    }

    return (
      traverse(node.left, lowerLimit, node.val) &&
      traverse(node.right, node.val, upperLimit)
    );
  };

  return traverse(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}
