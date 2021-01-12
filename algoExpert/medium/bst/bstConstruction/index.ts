// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number): BST {
    // Write your code here.

    if (value < this.value) {
      if (!this.left) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }

    // Do not edit the return statement of this method.
    return this;
  }

  contains(value: number) {
    // Write your code here.

    if (value < this.value) {
      if (!this.left) {
        return false;
      } else {
        this.left.contains(value);
      }
    } else {
      if (!this.right) {
        return false;
      } else {
        this.right.contains(value);
      }
    }

    return false;
  }

  remove(value: number): BST {
    // Write your code here.

    // find values
    if (value < this.value && !!this.left) {
      this.left.remove(value);
    } else if (value > this.value && !!this.right) {
      this.right.remove(value);
    } else {
      // find smallest value in right subtree (this will be the left most value of the right side)
      

      // store value

      // replace that parent with that value

      // then remove the node that replaces parent
    }

    // else

    // Do not edit the return statement of this method.
    return this;
  }
}
