/**
 * 572. Subtree of Another Tree

Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4 
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.
 * 
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

// var isSubtree = function (s, t) {
//   if (!s) return false;

//   // look through the left and right
//   return isEqual(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
// };

// // checks for equality between the trees
// function isEqual(root1, root2) {
//   if (!root1 || !root2) return !root1 && !root2;
//   if (root1.val !== root2.val) return false;
//   return isEqual(root1.left, root2.left) && isEqual(root1.right, root2.right);
// }

/**
 * O(m * n)
 */

// var isSubtree = function (s, t) {
//   let isExist = false;
//   traverse(s, t);
//   return isExist;
// };

// function traverse(root, target) {
//   if (!root) return;
//   if (isExist) return;
//   if (root.val === target.val) {
//     isExist = isEqual(root, target);
//   }
//   traverse(root.left, target);
//   traverse(root.right, target);
// }
// // Time Complexity: O(m*n), m = size of s and n = size of t | isEqual() which has a time complexity of O(n) can be called for every node in s so the total time complexity is O(m*n)
// // Space Complexity: O(m), call stack can go as deep as m (which will be greater than or equal to n)

// // checks if two subtrees are the same
// function isEqual(node1, node2) {
//   if (!node1 && !node2) return true;
//   if (!node1 || !node2) return false;
//   return (
//     node1.val == node2.val &&
//     isEqual(node1.left, node2.left) &&
//     isEqual(node1.right, node2.right)
//   );
// }

// Time Complexity: O(m*n), m = size of s and n = size of t | isEqual() which has a time complexity of O(n) can be called for every node in s so the total time complexity is O(m*n)
// Space Complexity: O(m), call stack can go as deep as m (which will be greater than or equal to n)

const isSubtree = (s, t) => {
  // edge cases: s is null. t can not be subtree of null
  if (s === null) return false;

  // check to see if we have the same subtree
  if (isSameTree(s, t)) {
    return true;
  }

  // recurse left or right
  return isSubtree(s.left, t) || isSubtree(s.right, t);
};

const isSameTree = (s, t) => {
  // if at leaf
  if (s === null || t === null) {
    return s === null && t === null;
  }
  // if they are the same, continue recursing
  if (s.val === t.val) {
    return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
  }

  return false;
};

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
const isSubtree = (s, t) => {
  if (!s) return false;

  // dfs to check if we have the same tree
  if (isSame(s, t)) return true;

  // keep traversing through s
  return isSubtree(s.left, t) || isSubtree(s.right, t);
};

const isSame = (s, t) => {
  // if one is at a leaf for either s or t
  if (!s || !t) {
    // they should both be at a leaf and have no children
    return s === null && t === null;
  }

  // we only want to recurse if values are the same
  if (s.val === t.val) {
    // they must be the same on left AND right side
    return isSame(s.left, t.left) && isSame(s.right, t.right);
  }
};
