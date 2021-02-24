// directions: [new if L, new if R]
type Delta = [number, number];

type Move = {
  direction: string;
  delta: Delta;
};

const directionsRotated: { [key: string]: (string | [number, number])[] } = {
  Up: ["Left", "Right", [0, 1]],
  Left: ["Down", "Up", [-1, 0]],
  Down: ["Right", "Left", [0, -1]],
  Right: ["Up", "Down", [1, 0]],
};

var isRobotBounded = function (instructions: string) {
  let position = [0, 0];

  let direction = "Up";
  let deltaPos = directionsRotated[direction][2];

  const filterUp = instructions.split("").filter((letter) => letter === "G")
    .length;

  if (filterUp === instructions.length) return false;

  // repeats instructions 4x
  instructions = instructions.repeat(4);

  for (const instruction of instructions) {
    if (instruction === "G") {
      deltaPos = directionsRotated[direction][2] as Delta;
      position = updatePosition(position, deltaPos);
    } else {
      const { direction: newDirection } = updateDirection(
        direction,
        instruction
      );
      direction = newDirection;
    }
    console.log(`inside loop`, { position, direction });

    if (position[0] === 0 && position[1] === 0) return true;
  }

  console.log({ direction, position });

  return direction === "Up" || (position[0] === 0 && position[1]);
};

const updateDirection = (direction: string, instruction: string): Move => {
  let newDirection = direction;

  if (instruction === "L") {
    newDirection = directionsRotated[direction][0] as string;
  } else {
    newDirection = directionsRotated[direction][1] as string;
  }

  const delta = directionsRotated[newDirection][2] as Delta;

  return {
    direction: newDirection,
    delta,
  };
};

const updatePosition = (position: any, direction: Delta) => {
  const deltaX = position[0] + direction[0];
  const deltaY = position[1] + direction[1];

  return [deltaX, deltaY];
};
