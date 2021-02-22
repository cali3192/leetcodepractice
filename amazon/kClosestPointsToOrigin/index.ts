function kClosest(points: number[][], K: number): number[][] {
  if (points.length === K) return points;

  const res = [];

  // loop though points
  for (let [index, point] of points.entries()) {
    // call helper where result will be key
    const key = getDistance(point);

    // check to see if map exists?
    console.log({ key, point });

    // map.set(key, points
    res.push([key, point]);
  }

  // get map enteries and sort on key
  const resSorted = res.sort((a, b) => a[0] - b[0]);

  console.log(`log: resSorted`, resSorted);

  // return first k elems in sorted map entries
  const result = resSorted.map((entry) => entry[1]).slice(0, K);

  console.log(`log: result`, result);

  return result;

  // return []
}

// define helper to get the disance
const getDistance = (points: number[]) => {
  const distance = Math.sqrt(points[0] ** 2 + points[1] ** 2);
  return distance;
};

/*
More efficient solution
*/
var kClosest = function (points, K) {
  let l = 0;
  let r = points.length - 1;

  while (l <= r) {
    let m = partition(points, l, r);
    if (m === K) {
      break;
    } else if (m < K) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return points.slice(0, K);
};

function partition(points, l, r) {
  let pivot = points[l];

  while (l < r) {
    while (l < r && compare(points[r], pivot) >= 0) r--;
    points[l] = points[r];
    while (l < r && compare(points[l], pivot) <= 0) l++;
    points[r] = points[l];
  }

  points[l] = pivot;
  return l;
}

function compare(a, b) {
  return a[0] * a[0] + a[1] * a[1] - (b[0] * b[0] + b[1] * b[1]);
}
