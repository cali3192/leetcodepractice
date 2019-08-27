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
