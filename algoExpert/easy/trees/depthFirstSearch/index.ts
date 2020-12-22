// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array: string[]) {
    // Write your code here.

    // push the current node value in the array
    array.push(this.name);

    // referencing the array fo children
    for (const child of this.children) {
      // each child has a depthFirstSearch and pass in the updated array
      child.depthFirstSearch(array);
    }

    return array;
  }
}
