function slowestKey(releaseTimes: number[], keysPressed: string): string {
  // let maxTime to Math.Min [time, letter]
  let maxTime = [0, ""];

  // loop though
  for (let i = 0; i < releaseTimes.length; i++) {
    // prevTime is either last time or 0
    let prevTime = releaseTimes[i - 1] || 0;

    // get currentTime
    let currentTime = releaseTimes[i];

    // calculate differnce as interval
    let interval = currentTime - prevTime;

    // if diff > replace maxTime OR
    // if maxTime === prevTime && keyPressed is lexicographically larger
    if (
      interval > maxTime[0] ||
      (interval === maxTime[0] && maxTime[1] < keysPressed[i])
    ) {
      maxTime = [interval, keysPressed[i]];
    }
  }

  // return maxTime
  return maxTime[1] as string;
}
