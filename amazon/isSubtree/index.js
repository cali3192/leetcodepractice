/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */

var isSubtree = function (s, t) {
  if (!s) return false;

  // look through the left and right 
  return isEqual(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};

// checks for equality between the trees
function isEqual(root1, root2) {
  if (!root1 || !root2) return !root1 && !root2;
  if (root1.val !== root2.val) return false;
  return isEqual(root1.left, root2.left) && isEqual(root1.right, root2.right);
}

/**
 * O(m * n)
 */

var isSubtree = function (s, t) {
  let isExist = false;
  traverse(s, t);
  return isExist;
};

function traverse(root, target) {
  if (!root) return;
  if (isExist) return;
  if (root.val === target.val) {
    isExist = isEqual(root, target);
  }
  traverse(root.left, target);
  traverse(root.right, target);
}
// Time Complexity: O(m*n), m = size of s and n = size of t | isEqual() which has a time complexity of O(n) can be called for every node in s so the total time complexity is O(m*n)
// Space Complexity: O(m), call stack can go as deep as m (which will be greater than or equal to n)

// checks if two subtrees are the same
function isEqual(node1, node2) {
  if (!node1 && !node2) return true;
  if (!node1 || !node2) return false;
  return (
    node1.val == node2.val &&
    isEqual(node1.left, node2.left) &&
    isEqual(node1.right, node2.right)
  );
}
