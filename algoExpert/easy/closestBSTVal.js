/**
 *
 * @param {*} tree
 * @param {*} target
 *
 * Time: TECHNICALLY O(n) b.c. if its imbalanced Olog(n)
 * Space: O(c)
 *
 */
function findClosestValueInBst(tree, target) {
  // Write your code here.

  // setting a the closest to an arbitrarily high value
  const closest = Number.MAX_SAFE_INTEGER;

  // helper to traverse the tree --> will return closest
  const findClosestValHelper = (tree, target, closest) => {
    // saving reference
    let curr = tree;

    // leaves and above
    while (curr !== null) {
      // if the target and val are same, return
      if (curr.value === target) return curr.value;

      // calc of last closes diff and curr diff
      const prevClosest = Math.abs(target - closest);
      const currDiff = Math.abs(target - curr.value);

      // override closest if currDiff is greated than the prev value
      if (Math.min(prevClosest, currDiff) === currDiff) {
        closest = curr.value;
      }

      // GOAL: we want to get as close as we can to the target value
      // if the target > node, go right
      if (Math.max(target, curr.value) === target) {
        curr = curr.right;

        //if target is smaller then node, we want to look at left side
      } else if (Math.max(target, curr.value) === curr.value) {
        curr = curr.left;
      }
    }

    // we want to update closest
    return closest;
  };

  // console.log(`LOG: `, { tree, target, closest }, "\n\n\n ");

  // initialize val
  return findClosestValHelper(tree, target, closest);
}

/**
 * Practice:
 *
 */

// function findClosestValueInBst(tree, target) {
//   const closest = Number.MAX_SAFE_INTEGER;

//   // function to traverse our BST - need tree, target, a closest : returns closest: number

//   const traverseToFindClosest = (tree, target, closest) => {
//     const node = tree;

//     while (!!node) {
//       const prevClosest = target - closest;
//       const currDiff = target - node.value;

//       if (Math.min(prevClosest, currDiff) === currDiff) {
//         closest = node.value;
//       }

//       if (Math.max(target, node.value) === target) {
//         node = node.right;
//       } else if (Math.max(target, node.value) === node.value) {
//         node = node.left;
//       } else {
//         break;
//       }
//     }

//     return closest;
//   };

//   return traverseToFindClosest(tree, target, closest);
// }
