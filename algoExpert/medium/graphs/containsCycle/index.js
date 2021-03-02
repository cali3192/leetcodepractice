// Attempt 1 node using DFS- Does not work
// function cycleInGraph(edges) {
//   // Write your code here.
//   const map = new Map();

//   // populate map
//   edges.forEach((edge, index) => map.set(index, edge));

//   console.log({ map, size: map.size });

//   // map to track edges seen
//   const nodeMap = new Map();

//   // loop through map
//   let node = 0;
//   let size = nodeMap.size;

//   // we will always increment i and we should see
//   while (size < edges.length) {
//     console.log(`line 19`, { node });
//     // wherever we are, we want to make sure sure we've added this node as "seen"
//     if (nodeMap.has(node)) {
//       return true;
//     } else {
//       // making sure we've seen
//       nodeMap.set(node, true);
//     }

//     let currNodeEdges = map.get(node);
//     console.log({ currNodeEdges });

//     if (currNodeEdges.length > 0) {
//       // get first node in map
//       let firstChild = currNodeEdges[0];

//       console.log({ firstChild });

//       // TODO: TEST remove that firstChild
//       map.get(node).shift();

//       console.log(`check`, map.get(node));

//       // update our node
//       node = firstChild;
//       console.log(`line 39`, { node });
//     } else {
//       node++;
//     }

//     size = nodeMap.size;
//   }

//   return false;
// }

// // Do not edit the line below.
// exports.cycleInGraph = cycleInGraph;

function cycleInGraph(edges) {
  // Write your code here.
  let totalNodes = edges.length,
    visited = new Map(),
    inStack = new Map();

  for (let node = 0; node < totalNodes; node++) {
    if (visited.has(node)) continue;

    // if (visited[node]) continue;

    const containsCycle = dfsNodeCycle(node, edges, visited, inStack);

    if (containsCycle) return true;
  }
  return false;
}

const dfsNodeCycle = (node, edges, visited, inStack) => {
  visited.set(node, true);
  inStack.set(node, true);

  const neighbors = edges[node]; // these are nodes ariomd it

  // loop through neighbors
  for (neighbor of neighbors) {
    // if you have not visited this node,
    if (!visited.has(neighbor)) {
      // recurse
      const containsCycle = dfsNodeCycle(neighbor, edges, visited, inStack);

      if (containsCycle) return true;

      // if neighbord in stack
    } else if (inStack.get(neighbor)) {
      // return true
      return true;
    }
  }

  // update if node is inStack
  inStack.set(node, false);

  return false;
};

// Do not edit the line below.
exports.cycleInGraph = cycleInGraph;
