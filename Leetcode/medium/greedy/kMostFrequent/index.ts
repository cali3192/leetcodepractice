function topKFrequent(nums: number[], k: number): number[] {
  // k === 0, return []
  // k > nums.length . k will always be within length

  /*
    {
      1: 3,
      2: 2,
      3: 1
    }
                  = [num, frequency] -> [key, value] -> Object.enteries
    frequencyArr = [[1, 3], [2, 2], [3, 3]]
    
  k most frequent elements
  
  return the first k elements
  
  
  */

  // create a map of frequencies
  const frequencies: { [key: number]: number } = {};
  for (const num of nums) {
    frequencies[num] = (frequencies[num] || 0) + 1;
  }

  console.log(
    "LOG ~ file: index.ts ~ line 23 ~ topKFrequent ~ frequencies",
    frequencies
  );

  // store the key value pairs in a frequncy array
  const frequencyArr = Object.entries(frequencies);

  console.log(
    "LOG ~ file: index.ts ~ line 31 ~ topKFrequent ~ frequencyArr",
    frequencyArr
  );

  // sort by frequency
  frequencyArr.sort((a, b) => b[1] - a[1]).slice(0, k);

  console.log(
    "LOG ~ file: index.ts ~ line 36 ~ topKFrequent ~ frequencyArr",
    frequencyArr
  );

  // return the first position of the first k elements in frequency array
  const result = frequencyArr.map((tuple) => parseInt(tuple[0]));
  console.log("LOG ~ file: index.ts ~ line 41 ~ topKFrequent ~ result", result);

  return result;
  // return [];
}
