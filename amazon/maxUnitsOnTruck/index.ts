var maximumUnits = function (boxTypes: [number, number][], truckSize: number) {
  let i = 0,
    noOfUnits = 0,
    loadedBoxes = 0;

  boxTypes.sort((a, b) => b[1] - a[1]);

  while (loadedBoxes < truckSize && boxTypes[i]) {
    let currentBoxs = boxTypes[i][0];

    if (currentBoxs + loadedBoxes > truckSize) {
      currentBoxs = truckSize - loadedBoxes;
    }

    loadedBoxes += currentBoxs;
    noOfUnits += currentBoxs * boxTypes[i][1];

    if (loadedBoxes === truckSize) return noOfUnits;

    i++;
  }

  return noOfUnits;
};
