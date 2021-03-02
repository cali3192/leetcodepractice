/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

// GOAL:  fills neighbors of same color
var floodFill = function (image, sr, sc, newColor) {
  // if you're trying to fill with same initial color, it will result in the same image
  if (image[sr][sc] === newColor) return image;

  const baseColor = image[sr][sc];

  // [i, j]
  const moves = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ];

  // nothing has changed than return the input image
  fill(image, sr, sc, baseColor, newColor, moves);

  return image;
};

// DFS fill(image, sr, sc, initalColor, newColor)
const fill = (image, i, j, initialColor, newColor, moves) => {
  // Base Case 1: Are we still in bounds?
  // Base Case 2: Is currPixel color not same as initial color?
  if (
    i < 0 ||
    i >= image.length ||
    j < 0 ||
    j >= image[i].length ||
    image[i][j] !== initialColor
  ) {
    return;
  }

  // if in bounds and same color, change to new color!
  image[i][j] = newColor;

  // call dsf on images around
  moves.forEach((move) => {
    fill(image, i + move[0], j + move[1], initialColor, newColor, moves);
  });
};
