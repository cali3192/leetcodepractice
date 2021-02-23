var maximumUnits = function (boxTypes: number[][], truckSize: number) {
  // declare our iterator, track number of units and number of loaded boxes
  let i = 0,
    noOfUnits = 0,
    loadedBoxes = 0;

  // sort our input by number of units
  boxTypes.sort((a, b) => b[1] - a[1]);

  // continue as long as you loaded boxes are less than truck size and you still have elemnts
  while (loadedBoxes < truckSize && i < boxTypes.length) {
    // get the elems in boxType elem
    let [currentBoxes, currentUnits] = boxTypes[i];

    let totalBoxes = currentBoxes + loadedBoxes;

    // if the total num of boxes is more than our truckscapacity
    if (totalBoxes > truckSize) {
      // reset our boxes to be the diff
      currentBoxes = truckSize - loadedBoxes;
    }

    // add the updated num of current boxes to total loaded boxes
    loadedBoxes += currentBoxes;

    // add associated box units with num of boxes to be added
    noOfUnits += currentBoxes * currentUnits;

    if (loadedBoxes === truckSize) return noOfUnits;

    i++;
  }

  return noOfUnits;
};

const boxTypes = [
    [1, 3],
    [2, 2],
    [3, 1],
  ],
  truckSize = 4;

const maxUnitsActual = maximumUnits(boxTypes, truckSize);
