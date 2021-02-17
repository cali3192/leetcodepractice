function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;

    console.log({ num, diff, map });

    if (!map.has(diff)) {
      map.set(diff, i);
    } else {
      return [map.get(diff), i];
    }
  }

  return [];
}
