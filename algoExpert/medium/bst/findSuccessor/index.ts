// This is an input class. Do not edit.
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  parent: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

// Solution 2
export function findSuccessor(tree: BinaryTree, node: BinaryTree) {
  // Write your code here.
  // if there is a right child, successor will be lefmost of right child

  // else (left side) get the right most parent

  return node;
}

// get leftmostchild
const getLeftmostChlid = (node: BinaryTree) => {
  // set current node
  // while there are left children
  // update the current node to node.left
  // you will end at leftmost leaf and return that
};

// get rightmostparent
const getRightmostParent = (node: BinaryTree) => {
  // set current node
  // while there is a parent and the parent node has a right chlid
  // set current node to parent
  // when at root, return
};

/**
 * TODO: take notes
 * In order:
 *  left
 *  visit
 *  right
 *
 * Solution 1:
 * Go through your standard in order result
 * Find your node
 * Return next
 * ** Problem - You never take advantage of the .parent property
 *
 * Solution 2:
 * We don't have to visit every node
 * If we have a successor, the successor would be in the right subtree
 * EX, add 7 to left of 5. At node 2, 7 will be successor of 2 if we go through the in order
 * so specifically, your successor for a node will be the leftmost node on its right side
 * However, not super helpful if we don't have a right subtree
 * But if you don't have a left, then your successor must be a parent or no successor at all
 * If we are a right child, then we know that the parent can not be the successor so look further up tree
 * If at some point, you notice yourself to the left of an ancestor, then you know that you haven't visited that node yet therefore you have a poetntial successor
 *
 *
 */
