class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function findClosestValueInBst(tree: BST, target: number) {
  // Write your code here.
  const closest = traverseTree(tree, target, Number.MAX_SAFE_INTEGER);

  console.log(
    "LOG ~ file: index.ts ~ line 16 ~ findClosestValueInBst ~ closest",
    closest
  );

  return closest;
  // return -1;
}

const traverseTree = (
  node: BST | null,
  target: number,
  closest: number
): any => {
  // return if node is null
  if (!node) return closest;

  // if target is node value, return
  if (target === node.value) return node.value;

  // calculate prev closest with current diff
  const closestDiff = Math.abs(target - closest);
  const currentDiff = Math.abs(target - node.value);

  // if the diff between current closest and target > target and node, update closest
  if (closestDiff > currentDiff) {
    closest = node.value;
  }

  // if target less than node, traverse left side
  if (target < node.value) {
    return traverseTree(node.left, target, closest);
  } else {
    return traverseTree(node.right, target, closest);
  }
};
