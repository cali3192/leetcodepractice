/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // create our adjescency map
  const map = new Map();

  // construct our adjescency matrix
  for (const [course, preReq] of prerequisites) {
    if (map.has(course)) {
      map.get(course).push(preReq);
    } else {
      map.set(course, [preReq]);
    }
  }

  // visited and inStack trackers
  let visited = new Map(),
    inStack = new Map();

  map.forEach((preReqs, course) => {
    if (visited.has(node)) continue;

    const containsCycle = dfsCourseCycle(course, preReqs, visited, inStack);

    if (containsCycle) return true;
  });
  return false;
};
