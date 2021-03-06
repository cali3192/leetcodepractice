/**
 * 
 * @param {*} jobDifficulty 
 * @param {*} d 
 * 
 * You want to schedule a list of jobs in d days. Jobs are dependent (i.e To work on the i-th job, you have to finish all the jobs j where 0 <= j < i).

You have to finish at least one task every day. The difficulty of a job schedule is the sum of difficulties of each day of the d days. The difficulty of a day is the maximum difficulty of a job done in that day.

Given an array of integers jobDifficulty and an integer d. The difficulty of the i-th job is jobDifficulty[i].

Return the minimum difficulty of a job schedule. If you cannot find a schedule for the jobs return -1.



Input: jobDifficulty = [6,5,4,3,2,1], d = 2
Output: 7
Explanation: First day you can finish the first 5 jobs, total difficulty = 6.
Second day you can finish the last job, total difficulty = 1.
The difficulty of the schedule = 6 + 1 = 7 
Example 2:

Input: jobDifficulty = [9,9,9], d = 4
Output: -1
Explanation: If you finish a job per day you will still have a free day. you cannot find a schedule for the given jobs.
Example 3:

Input: jobDifficulty = [1,1,1], d = 3
Output: 3
Explanation: The schedule is one job per day. total difficulty will be 3.
Example 4:

Input: jobDifficulty = [7,1,7,1,7,1], d = 3
Output: 15
Example 5:

Input: jobDifficulty = [11,111,22,222,33,333,44,444], d = 6
Output: 843

 */

/**

 6 | 5 4 3 2 1 -> 6 + 5  = 11  11 < minDiff
6 5 | 4 3 2  1  -> 6 + 4 = 10 10 < minDiff
6 5 4 | 3 2 1 -> 6 + 3


6 5 | 4 3 2 | 1 ** partition can't happen at very end

  */

/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function (jobDifficulty, d) {
  if (d > jobDifficulty.length) return -1;
  let minDiff = Infinity;

  const dfs = (index, d, currDifficulty) => {
    if (d === 1) {
      const lastDay = jobDifficulty.slice(index);
      const lastMax = Math.max(...lastDay);
      currDifficulty = currDifficulty + lastMax;
      // console.log({ lastDay,lastMax, currDifficulty })
      minDiff = Math.min(minDiff, currDifficulty);
      return;
    }

    let dailyMax = -Infinity;

    for (let i = index; i < jobDifficulty.length - 1; i++) {
      dailyMax = Math.max(dailyMax, jobDifficulty[i]); // 7
      // console.log({ i, d, index, difficulty: jobDifficulty[i], dailyMax, currDifficulty })
      dfs(i + 1, d - 1, currDifficulty + dailyMax); //
    }
  };

  dfs(0, d, 0);

  return minDiff;
};

// [7,1,7,1,7,1], d = 3

var minDifficulty = function (jobDifficulty, d) {
  // code goes here

  // edge case: need a task at everyday
  if (d > jobDifficulty.length) return -1;

  let minDiff = Infinity;

  // index representing paritions
  const dfs = (index, d, currentDifficulty) => {
    // 0, 3, 0 -> 1, 2, 7 -> 2, 1, 8
    // base case
    if (d === 1) {
      // get jobs from last day
      const lastDayJobs = jobDifficulty.slice(index); // [7, 1, 7, 1, 7, 1]
      const lastDayMax = Math.max(...lastDayJobs); // 7
      currentDifficulty = currentDifficulty + lastDayMax; // 8 + 7 = 15

      minDiff = Math.min(minDiff, currentDifficulty); // 15

      return;
    }

    // else logic here

    // we want to track today's maxDifficult
    let dailyMax = -Infinity;

    for (let i = index; i < jobDifficulty.length - 1; i++) {
      // i = 1
      dailyMax = Math.max(dailyMax, jobDifficulty[i]); // -Infin ,7 -> 7, -In, 1 -> 1
      dfs(i + 1, d - 1, currentDifficulty + dailyMax); // dfs(1, 2, 7) dfs(2, 1, 7 + 1)
    }
  };

  dfs(0, d, 0);

  return minDiff;
};

/*
 [11,111,22,222,33,333,44,444] // 6
minDiff = Inf   // only update when we're out of days
11  -> 11  d = 6                 
111 -> 111 + 11 = 122   d = 5
22  -> 22 + 111 + 11 = 144 d = 4
...
3333 -> 1000 d = 1  min(minDiff, 1000) -> 1000

11 -> d = 6
111 22 -> Max(111, 22) -> 111 + 11 = 122 d = 5
...
min(1000, 950) -> 950 d = 1

*/

var minDifficulty = function (jobDifficulty, d) {
  // edge case: where we have more days than jobs
  if (d > jobDifficulty.length) return -1;

  let minDiff = Infinity;

  const dfs = (index, d, totalJobDifficulty) => {
    // base case
    if (d === 1) {
      const lastDayJobs = jobDifficulty.slice(index);
      const lastDayMax = Math.max(...lastDayJobs);
      minDiff = Math.max(minDiff, totalJobDifficulty + lastDayMax);

      return;
    }

    let dailyMax = -Infinity;

    for (let i = index; i < jobDifficulty.length - 1; i++) {
      dailyMax = Math.max(dailyMax, jobDifficulty[i]);

      dfs(i + 1, d - 1, totalJobDifficulty + dailyMax);
    }
  };

  dfs(0, d, 0);

  return minDiff;
};
