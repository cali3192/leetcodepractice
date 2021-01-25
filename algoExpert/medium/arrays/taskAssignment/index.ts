export function taskAssignment(k: number, tasks: number[]) {
  // Write your code here.

  // creating refernce with task and index to hold on to index
  const tasksWithIndex = tasks.map((task, index) => [task, index]);

  // sort the task with index array by task size
  const ratedTasks = tasksWithIndex.sort((a, b) => a[0] - b[0]);

  // result array
  const res: [number, number][] = [];

  const taskLength = tasks.length - 1;

  // iterator
  let i = 0;

  // b.c. tasks.length is 2x k, we know we want k results if each worker gets 2 tasks
  while (i < k) {
    // worker tasks will be at left pointer (starting at 0) and right pointer(length - i)
    const workerTasks: [number, number] = [
      // left poisition
      ratedTasks[i][1],

      // corresponding right position
      ratedTasks[taskLength - i][1],
    ];

    // push current worker tasks to result array
    res.push(workerTasks);

    // increment iterator
    i++;
  }

  // return resul
  return res;
}
