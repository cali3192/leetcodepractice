// export enum Direction {
//   East = "EAST",
//   West = "WEST",
// }

// export function sunsetViews(buildings: number[], direction: Direction) {
//   // Write your code here.

//   // edge cases
//   if (buildings.length === 0) return buildings;
//   if (buildings.length === 1) return [0];

//   // depending on direction, pass to different functinos
//   const buildingsWithView =
//     direction === Direction["East"]
//       ? facingEast(buildings)
//       : facingWest(buildings);

//   return buildingsWithView;
// }

// const facingEast = (buildings: number[]): number[] => {
//   // create storage array - the first building in array will always have the view
//   const firstBuilding = buildings[buildings.length - 1];

//   //
//   let buildingsWithView = [buildings.length - 1];

//   // declare max to start with firstbuilding
//   let max = firstBuilding;

//   // start incrementing at 2 from last because we handled first element
//   let i = buildings.length - 2;
//   while (i >= 0) {
//     // if the current building greater than max,
//     if (buildings[i] > max) {
//       // add index to result array
//       buildingsWithView.unshift(i);

//       // update max
//       max = buildings[i];
//     }

//     //
//     i--;
//   }

//   // return result array
//   return buildingsWithView;
// };

// const facingWest = (buildings: number[]) => {
//   const firstBuilding = buildings[0];

//   let buildingsWithAView = [0];

//   let max = firstBuilding;

//   let i = 0;

//   while (i < buildings.length) {
//     if (buildings[i] > max) {
//       buildingsWithAView.push(i);
//       max = buildings[i];
//     }
//     i++;
//   }

//   return buildingsWithAView;
// };

export enum Direction {
  East = "EAST",
  West = "WEST",
}

export function sunsetViews(buildings: number[], direction: Direction) {
  // Write your code here.

  // edge cases
  if (buildings.length === 0) return buildings;
  if (buildings.length === 1) return [0];

  // we will be looking west and east is reverse of west
  let interestedBuildings =
    direction === Direction["East"] ? buildings.reverse() : buildings;

  // helper to get buildings based on direction
  const buildingsWithView = getSunsetBuildings(interestedBuildings, direction);

  return buildingsWithView;
}

const getSunsetBuildings = (buildings: number[], direction: Direction) => {
  // our array will be populated by either first indx or last depending on direction
  let buildingsWithAView =
    direction === Direction["West"] ? [0] : [buildings.length - 1];

  // we start our comparisons with the first building
  const firstBuilding = buildings[0];
  let max = firstBuilding;

  // declare our iterator at 1 bc we've explored our first elem
  let i = 1;

  // loop thorugh buildings
  while (i < buildings.length) {
    // if we find a taller building
    if (buildings[i] > max) {
      // depending on direction, we add to end
      if (direction === Direction["West"]) {
        buildingsWithAView.push(i);
      } else {
        // or append to front
        buildingsWithAView.unshift(buildings.length - 1 - i);
      }

      // update our max
      max = buildings[i];
    }

    // update incrementor
    i++;
  }

  return buildingsWithAView;
};
