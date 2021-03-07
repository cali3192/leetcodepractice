/** ---------------------------
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 * --------------------------- */
var canFinish = function (numCourses, prerequisites) {
  const edges = createMatrix(numCourses, prerequisites);
  // const visited = new Array(numCourses).fill(false);
  // const currentlyVisiting = new Array(numCourses).fill(false);
  const visited = new Map();
  const currentlyVisiting = new Map();

  for (const [course, preReqs] of edges.entries()) {
    if (hasCycle(course, edges, visited, currentlyVisiting)) {
      return false;
    }
  }

  return true;
};

var hasCycle = function (course, edges, visited, currentlyVisiting) {
  // visited[course] = true;
  // currentlyVisiting[course] = true;
  visited.set(course, true);
  currentlyVisiting.set(course, true);

  const preReqs = edges[course];

  for (const preReq of preReqs) {
    // if (!visited[preReq]) {
    if (!visited.has(preReq)) {
      const containsCycle = hasCycle(preReq, edges, visited, currentlyVisiting);

      if (containsCycle) return true;
      // } else if (currentlyVisiting[preReq]) {
    } else if (currentlyVisiting.get(preReq)) {
      return true;
    }
  }

  // currentlyVisiting[course] = false;
  currentlyVisiting.set(course, false);
  return false;
};

var createMatrix = function (numCourses, prerequisites) {
  const matrix = [];
  for (let i = 0; i < numCourses; i++) {
    matrix.push([]);
  }

  prerequisites.forEach(([course, prereq]) => {
    matrix[course].push(prereq);
  });

  return matrix;
};

/** ---------------------------
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 * --------------------------- */

// define CourseNode class
class CourseNode {
  constructor(courseNum) {
    this.courseNum = courseNum;
    this.preReqs = []; // array of courseNodes
    this.visited = false;
    this.isVisiting = false;
  }
}

// populate eachCourse with Nodevalues
const createGraph = (numCourses, prerequisites) => {
  // define the graph
  const graph = [];

  for (let i = 0; i < numCourses; i++) {
    // create a new courseNode at i
    const courseNode = new CourseNode(i);

    // add each course to corresponding node position on graph
    graph[i] = courseNode;
  }

  for (const [course, preReq] of prerequisites) {
    // to get the CourseNode to add in preReq, it will be in its position on the graph
    const preReqCourse = graph[preReq];

    // pushing our preReq node do array of prereqs
    graph[course].preReqs.push(preReqCourse);
  }

  // return the graph
  return graph;
};

var canFinish = function (numCourses, prerequisites) {
  // create a graph of courses
  const courses = createGraph(numCourses, prerequisites);

  // loop through courses
  for (let course of courses) {
    // if the res of recurse call is true and we have cycle
    if (hasCycle(course)) {
      // we can not complete our courses
      return false;
    }
  }

  // if no cycle, return false
  return true;
};

// dfs
const hasCycle = (course) => {
  // updated our visited and visiting properties
  course.visited = true;
  course.isVisiting = true;

  // loop thorugh preReqs array of each course
  for (const preReq of course.preReqs) {
    // if we have no visited preReq
    if (!preReq.visited) {
      // check to see if prereq has cycle
      if (hasCycle(preReq)) {
        return true;
      }

      // if we're currently visiting node, found have a cycle
    } else if (preReq.isVisiting) {
      return true;
    }
  }

  // at done, reset visiting
  course.isVisiting = false;

  // return false for no cycle
  return false;
};
