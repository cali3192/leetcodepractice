function minHeightBst(array) {
  // Write your code here.
  constructBST(array, 0, array.length - 1);
}

const constructBST = (array, leftIndx, rightIndx) => {
  // we always want left < right
  if (leftIndx > rightIndx) return null;

  // get midIndex
  const midIndx = Math.floor((leftIndx + rightIndx) / 2);

  // find elem in midIndx
  const midElem = array[midIndx];

  // declare a new bst with array[midIdx]
  const bst = new BST(midElem);

  // call construct on left and append to bst.left
  bst.left = constructBST(array, leftIndx, midIndx - 1);

  // call construct on right and append to bst.right
  bst.right = constructBST(array, midIndx + 1, rightIndx);

  // return bst
  return bst;
};

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

// Do not edit the line below.
exports.minHeightBst = minHeightBst;
