/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 *
 * i.e.
 *       1                               1
 *    2     2     --> True           2       2     --> False
 *  3  4   4  3                    4  3    4  3
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

function isSymmetric(root: TreeNode | null): boolean {
  // if tree is null, symmetrical
  if (!root) return true;

  // check to see if !!left, !!right, and root.left and right are same
  if (root.left && root.right && root.left.val !== root.right.val) return false;

  // pass in function to check children
  const traverse = (left: TreeNode | null, right: TreeNode | null) => {
    // if either is null, check to see if other side is also null
    if (!left || !right) {
      return left === right;
    }

    // values should be the same
    if (left.val !== right.val) {
      return false;
    }

    // check right side down right side with left side down left side
    return (
      traverse(left.left, right.right) &&
      // its mirrored so you need to pass left.right first then right.left
      traverse(left.right, right.left)
    );
  };

  return traverse(root.left, root.right);
}
