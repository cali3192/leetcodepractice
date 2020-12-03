/**
 * Time: 0(v + e)
 *   e - edges (lines connecting nodes)
 *   v - vertices or nodes
 *
 * proportional to the number of children on the available vertices
 *
 */

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.

    // pushing the "name" or "val" in the storage array
    array.push(this.name);

    // loop through each child
    for (const child of this.children) {
      // call the method on each child and pass updated array
      child.depthFirstSearch(array);
    }

    // YOU NEED TO RETURN SOMETHING
    return array;
  }
}
