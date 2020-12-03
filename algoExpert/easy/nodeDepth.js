/**
 *
 * @param {*} root
 * 1. Itarative approach with a stack
 */
// function nodeDepths(root) {
//   // Write your code here.

//   let sum = 0;

//   const stack = [{ node: root, depth: sum }];

//   while (stack.length) {
//     const { node, depth } = stack.pop();
//     console.log(`\n LOG: `, { sum, stack, node, depth });

//     if (!node) continue;

//     sum += depth;

//     const updatedDepth = depth + 1;

//     stack.push({ node: node.left, depth: updatedDepth });
//     stack.push({ node: node.right, depth: updatedDepth });
//   }

//   return sum;
// }

/**
 * 2. Recursive Approach
 *
 * f(n,d) = d + f(left, d + 1) + f(right, d + 1)
 *
 */

function nodeDepths(root) {
  let depth = 0;

  let traverse = (root, depth) => {
    if (!root) return 0;

    const updatedDepth = depth + 1;

    return (
      depth +
      traverse(root.left, updatedDepth) +
      traverse(root.right, updatedDepth)
    );
  };

  const result = traverse(root, depth);
  console.log(
    "LOG ~ file: nodeDepth.js ~ line 51 ~ nodeDepth ~ result",
    result
  );

  return result;
}
