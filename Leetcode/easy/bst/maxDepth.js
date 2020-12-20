/**
 *
 * @param {TreeNode} root
 * @return {number}
 *
 *   * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var maxDepth = function (root) {
  // base case
  if (root === null) return 0;

  // left traverse
  const left = maxDepth(root.left);
  // right traverse
  const right = maxDepth(root.right);

  console.log({ root, left, right });

  // return the max depth of the two
  return Math.max(left, right) + 1;
};
