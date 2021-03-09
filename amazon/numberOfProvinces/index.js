/**
 * 547. Number of Provinces
 * There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2



[[1,0,0],[0,1,0],[0,0,1]]
 */

/** ----------------------------
 * @param {number[][]} isConnected
 * @return {number}
 * ----------------------------
 */

var findCircleNum = function (m) {
  console.log({ m });
  let groups = 0;

  // looping through each elem in matrix
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      // if we find a city, increment group
      if (m[i][j] === 1) {
        groups++;

        // DFS
        traverse(i, j, m);
      }
    }
  }
  return groups;
};

function traverse(i, j, matrix) {
  if (matrix[i][j] !== 1) return;

  // update to 0 bc to mark as "seen"
  matrix[i][j] = 0;

  console.log({
    i,
    j,
    row: matrix[j],
  });

  //
  for (let col = 0; col < matrix[j].length; col++) {
    traverse(j, col, matrix);
  }
}

/**
 * @param {number[][]} isConnected
 * @return {number}
 */

var findCircleNum = function (isConnected) {
  // define visited set and provs count
  let visited = new Set(),
    provs = 0;

  // loop through connected where provinces = i
  for (let i = 0; i < isConnected.length; i++) {
    // if province has not been visited
    if (!visited.has(i)) {
      // update province
      provs++;

      // dfs to add to visited
      DFS(isConnected, i, visited);
    }
  }

  // return num of provinces
  return provs;
};

const DFS = (isConnected, i, visited) => {
  // add province to visited
  visited.add(i);

  // loop through connections
  for (let j = 1; j < isConnected.length; j++) {
    // if connection is 1 and node not in set
    if (isConnected[i][j] === 1 && !visited.has(j)) {
      // call dfs again
      DFS(isConnected, j, visited);
    }
  }
};
