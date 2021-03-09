/**
 * Course Schedule II
 * 
 * There are a total of n courses you have to take labelled from 0 to n - 1.

Some courses may have prerequisites, for example, if prerequisites[i] = [ai, bi] this means you must take the course bi before the course ai.

Given the total number of courses numCourses and a list of the prerequisite pairs, return the ordering of courses you should take to finish all courses.

If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.
 * 
 * 
 * Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
Example 2:

Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
Example 3:

Input: numCourses = 1, prerequisites = []
Output: [0]

 */

/** ----------------------------------
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

class CourseNode {
  constructor(course) {
    this.course = course;
    this.preReqs = []; // an array of courses
    this.visited = false;
    this.isVisiting = false;
  }
}

// constructor our graph
const constructGraph = (numCourses, prerequisites) => {
  // store our graph data
  const graph = [];

  // Loop 1: add classNodes to graph arr
  // add nodes i graph
  for (let i = 0; i < numCourses; i++) {
    // create class node for each course
    const classNode = new CourseNode(i);

    // add class node to associated postion on the grpah
    graph[i] = classNode;
  }

  // Loop2: Add Prereqs to each course
  for (const [course, preReq] of prerequisites) {
    // get courseNode for preReq
    const prereqCourse = graph[preReq];

    // add the prereqCourse to current course
    graph[course].preReqs.push(prereqCourse);
  }

  // return the graph
  return graph;
};

var findOrder = function (numCourses, prerequisites) {
  // create storage array
  const schedule = [];

  // construct our courses graoh
  const courses = constructGraph(numCourses, prerequisites);

  // loop through courses
  for (let course of courses) {
    // if there is a cycle present
    if (hasCycle(course, schedule)) {
      // can not complete courses
      return [];
    }
  }

  // if no cycle, get all unique courses in array
  const set = new Set(schedule);

  // convert set to array and return
  const arrayschedule = Array.from(set);

  return arrayschedule;
};

// DFS: check for cycles - returning true or false
const hasCycle = (course, schedule) => {
  // updated our properties
  course.visited = true;
  course.isVisiting = true;

  // go through current courses preReqs
  for (const preReq of course.preReqs) {
    // if the preReq has not been visited
    if (!preReq.visited) {
      // DFS
      if (hasCycle(preReq, schedule)) {
        return true;
      }

      // if currently visiting preReq, another presense of cycle
    } else if (preReq.isVisiting) {
      return true;
    }
  }

  // if no cycle detected, add courseId to the schedule
  schedule.push(course.course);

  // updated the isVisiting property
  course.isVisiting = false;

  // return false if no cycle is detected
  return false;
};
