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
  let list = new LinkedList(0);

  let sumOne = 0;
  let sumTwo = 0;

  let i = 0;

  //
  while (!!linkedListOne || !!linkedListTwo) {
    if (!!linkedListOne) {
      sumOne += linkedListOne.value * 10 ** i;
    }
  }

  return linkedListOne;
}
