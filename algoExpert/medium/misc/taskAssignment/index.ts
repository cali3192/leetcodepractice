export function taskAssignment(k: number, tasks: number[]) {
  // Write your code here.

  // balance tasks
  // [1, 3, 5, 3, 1, 4] --> [1, 1, 3, 3, 4, 5]

  const tasksWithIndex = tasks.map((task, i) => {
    return { index: i, task };
  });

  tasksWithIndex.sort((a, b) => a.task - b.task);

  const res: [number, number][] = [];

  let i = 0;

  // go through our workers
  while (i < k) {
    console.log({ res });

    res[i] = [
      tasksWithIndex[i].index,
      tasksWithIndex[tasksWithIndex.length - 1 - i].index,
    ]; // [[1, 5], [1, 3] ]

    i++;
  }

  return res;
}
