/**
 * 323. Number of Connected Components in an Undirected Graph

 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

function countComponents(n, edges) {
  let ids = new Array(n).fill(0);

  for (const [index, elem] of ids.entries()) {
    ids[index] = index;
  }

  console.log({ ids });

  for (const edge of edges) {
    union(edge[0], edge[1], ids);
  }

  const set = new Set();

  for (const [index, edge] of ids.entries()) {
    set.add(find(index, ids));
  }

  console.log({ set });

  return set.size;
}

// define untion function
const union = (edge1, edge2, ids) => {
  // find the parents of nodes 1 and 2
  let parent1 = find(edge1, ids);
  let parent2 = find(edge2, ids);

  ids[parent1] = parent2;
};

// path compression
const find = (edge, ids) => {
  // path compression magic is here
  // if not a parent
  if (ids[edge] !== edge) {
    // we reassing the edges parent
    ids[edge] = find(ids[edge], ids);
  }

  // now that we're at a parent
  return ids[edge];
};

const n = 5,
  edges = [
    [0, 1],
    [1, 2],
    [3, 4],
  ];

const actual = countComponents(n, edges);
