var findMinDifference = function (timePoints) {
  // minutes in day
  let minutesInDay = 24 * 60;

  // variable to track our min difference
  let minDifference = Number.MAX_SAFE_INTEGER;

  // array to be populated with false
  let minArray = new Array(minutesInDay).fill(false);

  // loop through time points
  for (let i = 0; i < timePoints.length; i++) {
    // get current timePoint
    const timePoint = timePoints[i];

    // call helper that gets time in minutes
    let timeInMinutes = getTimeInMinutes(timePoint);

    // if at that index in minArray is already true, you are looking at the same value, then difference is 0
    if (minArray[timeInMinutes][1] === true) return 0;

    // set a tuple with timeInMinutes and true for visited
    minArray[timeInMinutes] = [timeInMinutes, true];
  }

  // filter for true values
  let timePointsMinutes = minArray.filter((elem) => !!elem[1]);

  // check difference clockwise and counterclockwise
  for (let i = 0; i < timePointsMinutes.length; i++) {
    // at the start of the array, you want to be able to compare to the last elem
    const prevTime =
      i === 0
        ? timePointsMinutes[timePointsMinutes.length - 1][0]
        : timePointsMinutes[i - 1][0];
        
    const currTime = timePointsMinutes[i][0];

    // we want to compare clockwise in time and counterclockwise
    const clockwiseDiff = Math.abs(prevTime - currTime);
    const counterclockwiseDiff = Math.abs(minutesInDay - prevTime + currTime);

    // min difference will be the smallest between current min value and our two calculated clockwiseDiff and counterclockwiseDiff
    minDifference = Math.min(
      minDifference,
      clockwiseDiff,
      counterclockwiseDiff
    );
  }

  console.log({ minDifference });

  return minDifference;
};

// helper that takes in a time string (HH:MM) and outputs its representation in minutes
// i.e. 01:00 -> 60, 02:34 -> 154
const getTimeInMinutes = (timePoints) => {
  // the format ensures that we can expect hours and minutes seperated by ":"
  const [hours, minutes] = timePoints.split(":");

  return parseFloat(hours) * 60 + parseFloat(minutes);
};

const testInput = ["23:59", "00:00"];
const actual = findMinDifference(testInput);
