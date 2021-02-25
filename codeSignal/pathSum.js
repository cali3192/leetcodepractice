// Initial Solution
// BST traveral
const hasPathSum = (root, sum) => {
  const traverse = (node, current) => {
    if (!node) {
      return false;
    }
    if (!node.left && !node.right) {
      return sum === current + node.val;
    }
    let leftPath = traverse(node.left, current + node.val);
    let rightPath = traverse(node.right, current + node.val);
    return leftPath || rightPath;
  };
  return traverse(root, 0);
};

// Another solution, faster and less memory
// const hasPathSum = (root, sum) => {
//   if (!root) return false;
//   sum -= root.val;
//   if (!root.right && !root.left) return !sum;
//   return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
// };
