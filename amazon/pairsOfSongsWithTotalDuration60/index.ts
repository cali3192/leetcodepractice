/**
 * 1010. Pairs of Songs With Total Durations Divisible by 60


 1010. Pairs of Songs With Total Durations Divisible by 60
Medium

1177

71

Add to List

Share
You are given a list of songs where the ith song has a duration of time[i] seconds.

Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

 

Example 1:

Input: time = [30,20,150,100,40]
Output: 3
Explanation: Three pairs have a total duration divisible by 60:
(time[0] = 30, time[2] = 150): total duration 180
(time[1] = 20, time[3] = 100): total duration 120
(time[1] = 20, time[4] = 40): total duration 60
Example 2:

Input: time = [60,60,60]
Output: 3
Explanation: All three pairs have a total duration of 120, which is divisible by 60.

 */

// brute force
// function numPairsDivisibleBy60(time: number[]): number {
//   // [0.5, 0.333, 2.5, 0.666,  ]

//   // const divided = time.map((element) => element/60)

//   let counter = 0;

//   // loop thorugh array
//   for (let i = 0; i < time.length - 1; i++) {
//     // start at 1 more than i
//     for (let j = i + 1; j < time.length; j++) {
//       // get total
//       const total = time[i] + time[j];

//       // if total % 60 is 0
//       if (total % 60 === 0) {
//         // increment counter
//         counter++;
//       }
//     }
//   }
//   return counter;
// }

// {
/**
  * 
  * @param time 
  * 
  * 
  * 
  ALGORITHM: 
  {
  songTime: 30,
  mod: 30,
  possible: 30,
  count: 0,
  map: Map(1) { 30 => 1 }
}
{
  songTime: 20,
  mod: 20,
  possible: 40,
  count: 0,
  map: Map(2) { 30 => 1, 20 => 1 }
}
{
  songTime: 150,
  mod: 30,
  possible: 30,
  count: 1,
  map: Map(2) { 30 => 2, 20 => 1 }
}
{
  songTime: 100,
  mod: 40,
  possible: 20,
  count: 2,
  map: Map(3) { 30 => 2, 20 => 1, 40 => 1 }
}
{
  songTime: 40,
  mod: 40,
  possible: 20,
  count: 3,
  map: Map(3) { 30 => 2, 20 => 1, 40 => 2 }
}

  */

var numPairsDivisibleBy60 = function (time: number[]) {
  // define a count and storage map
  let count = 0,
    map = new Map();

  // loop through time array
  for (let songTime of time) {
    // get our mod
    const mod = songTime % 60;

    // get our possible
    const possible = mod === 0 ? 0 : 60 - mod;

    // if possible is in map, add that num to count or add 0
    count += map.get(possible) || 0;

    // if mod in map, set to 0 but always add 1s
    map.set(mod, (map.get(mod) || 0) + 1);
  }

  return count;
};
