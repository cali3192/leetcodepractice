var asteroidCollision = function (asteroids) {
  const stack = [];

  // loop through astroids
  for (let i = 0; i < asteroids.length; i++) {
    // get current astroid
    const curr = asteroids[i];

    // if moving in + direction
    if (curr > 0) {
      // immediately push
      stack.push(curr);
    } else {
      // if stack not empty
      // AND if top is positive
      // AND if top is smaller than curr
      while (
        stack.length &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] < Math.abs(curr)
      ) {
        // remove the last elem in stack
        stack.pop();
      }

      // if stack not empty
      // AND if top has the same size as curr
      if (stack.length && stack[stack.length - 1] === Math.abs(curr)) {
        stack.pop();
      }
      // if stack is empty
      // OR top is negative
      else if (!stack.length || stack[stack.length - 1] < 0) {
        stack.push(curr);
      }
    }
  }

  return stack;
};
