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
 */

function levelOrder(root: TreeNode | null): number[][] {
  // code goes here
  // defined your result array
  const result = [];

  // edge cases
  if (!root) return result;

  // define your queue and start with your root
  const queue = [root];

  // while !queue.length
  while (!!queue.length) {
    // temp arr for each level
    const levelArray = [];

    // track initial queue length
    const initialLength = queue.length;

    // go through each level
    for (let i = 0; i < initialLength; i++) {
      // get current node
      const node = queue.shift();

      console.log(`LOG: `, { node, queue, levelArray }, `\n\n`);

      // push to temp array
      levelArray.push(node.val);

      if (!!node.left) {
        queue.push(node.left);
      }

      if (!!node.right) {
        queue.push(node.right);
      }
    }
    result.push(levelArray);
  }

  return result;
}

/*

LOG:  { node: [3,9,20,null,null,15,7], queue: [], levelArray: [] } 


LOG:  { node: [9], queue: [ [20,15,7] ], levelArray: [ 3 ] } 


LOG:  { node: [20,15,7], queue: [], levelArray: [] } 


LOG:  { node: [15], queue: [ [7] ], levelArray: [ 20 ] } 


LOG:  { node: [7], queue: [], levelArray: [] } 

*/
