export function minHeightBst(array: number[]) {
  // Write your code here.

  //  initialize helper with min, max, and array
  const constructedBST = constructMinHeighBST(0, array.length - 1, array);

  return constructedBST;

  // return new BST(-1);
}

  // helper
  const constructMinHeighBST = (min: number, max: number, array: number[]) => {
    // if max < min, you've gone as far as you need to
    if (max < min) return null;

    // calculate mid
    const mid = Math.floor((max + min) / 2);

    // create new bst by passing mid
    const bst = new BST(array[mid]);

    // the result of calling construct on left is the left side - new max will be curr mid
    bst.left = constructMinHeighBST(min, mid - 1, array) as BST | null;

    // same with right - new min will be mid + 1
    bst.right = constructMinHeighBST(mid + 1, max, array) as BST | null;

    // return the bst
    return bst;
  };

  export class BST {
    value: number;
    left: BST | null;
    right: BST | null;

    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }

    insert(value: number) {
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
