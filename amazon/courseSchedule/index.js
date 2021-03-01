/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // create our adjescency map
  const map = new Map();

  for (const [course, preReq] of prerequisites) {
    if (map.has(course)) {
      map.get(course).push(preReq);
    } else {
      map.set(course, [preReq]);
    }
  }
};
