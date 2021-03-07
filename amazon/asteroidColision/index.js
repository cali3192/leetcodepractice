var asteroidCollision = function (asteroids) {
  // define our result stack
  const stack = [];

  // loop through astroids
  for (let i = 0; i < asteroids.length; i++) {
    // get current astroid
    const asteroid = asteroids[i];

    // if moving in + direction
    if (asteroid > 0) {
      // immediately push
      stack.push(asteroid);
    } else {
      // if stack not empty
      // AND if top is positive
      // AND if last element in stack is smaller than current asteroid
      while (
        stack.length > 0 &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] < Math.abs(asteroid)
      ) {
        // Keep removing astroids until
        stack.pop();
      }

      // if stack not empty
      // AND if top has the same size as asteroid
      if (stack.length > 0 && stack[stack.length - 1] === Math.abs(asteroid)) {
        stack.pop();
      }
      // if stack is empty
      // OR top is negative
      else if (!stack.length || stack[stack.length - 1] < 0) {
        stack.push(asteroid);
      }
    }
  }

  // return the stack
  return stack;
};
