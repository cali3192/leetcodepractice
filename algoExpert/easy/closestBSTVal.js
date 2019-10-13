const findClosestValueInBst = (tree, target) => {
  // Write your code here.
  return findClosestValHelper(tree, target, Infinity);
};

const findClosestValHelper = (tree, target, closest) => {
  let curr = tree;
  while (curr !== null) {
    if (Math.abs(target - closest) > Math.abs(target - curr.value)) {
      closest = curr.value;
    }
    if (target < curr.value) {
      curr = curr.left;
    } else if (target > curr.value) {
      curr = curr.right;
    } else {
      break;
    }
  }
  return closest;
};
