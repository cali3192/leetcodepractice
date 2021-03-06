var kClosest = function (points, k) {
  // const pointsWithDistance = points
  //   .map((point) => {
  //     const distance = calculateEuclideanDistance(point);
  //     return [...point, distance];
  //   })
  //   .sort((a, b) => a[2] - b[2])
  //   .splice(0, k);

  // console.log({ pointsWithDistance });
  // return pointsWithDistance.map((point) => point.splice(0, 2));
  points.sort(
    (a, b) => calculateEuclideanDistance(a) - calculateEuclideanDistance(b)
  );

  return points.slice(0, K);
};

const calculateEuclideanDistance = (point) => {
  return Math.abs(Math.sqrt(point[0] ** 2 + point[1] ** 2));
};

/*

More efficient solution
Divide and Conquer using a pivot

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
