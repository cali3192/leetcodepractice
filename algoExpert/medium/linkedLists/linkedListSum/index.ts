// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function sumOfLinkedLists(
  linkedListOne: LinkedList,
  linkedListTwo: LinkedList
) {
  // Write your code here.

  // define new linked list pointer
  const linkedListPointer = new LinkedList(0);
  let pointer: LinkedList["next"] = linkedListPointer;

  // define nodes to loop through
  let nodeOne: LinkedList["next"] = linkedListOne;
  let nodeTwo: LinkedList["next"] = linkedListTwo;

  // "remainder"
  let remainder = 0;

  while (nodeOne !== null || nodeTwo !== null || remainder > 0) {
    // define value one and two
    // if value is null, use 0
    let valOne = (nodeOne && nodeOne.value) ?? 0;
    let valTwo = (nodeTwo && nodeTwo.value) ?? 0;

    // get sum of values and carry
    const sum = valOne + valTwo + remainder;

    console.log({ sum, nodeOne, nodeTwo, pointer });

    // get modulo of values (in case its greater than 10)
    const modSum = sum % 10;

    // create a new node with this value
    const node = new LinkedList(modSum);

    // new node is current.next
    pointer.next = node;

    // update current
    pointer = node;

    // update remainder, get the floor otherwise it will be an infinate amount of decimals (11 -> 1) (12 -> 2) (13 -> 3)
    remainder = Math.floor(sum / 10);

    // update nodes
    nodeOne = !!nodeOne ? nodeOne?.next : null;
    nodeTwo = !!nodeTwo ? nodeTwo?.next : null;
  }

  return linkedListPointer.next;
}
