/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

var copyRandomList = function (head) {
  // edge case: !head
  if (!head) return head;

  // define our pointer and new map
  let pointer = head;
  const map = new Map();

  // loop thorugh list
  while (!!pointer) {
    // for each node, create a new node
    const newNode = new Node(pointer.val, pointer.next, pointer.random);

    // set the pointer wiht new node
    map.set(pointer, newNode);

    // update the pointer
    pointer = pointer.next;
  }

  // second loop
  const secondPointer = head;

  // loop through list
  while (!!secondPointer) {
    // get currentNode in map
    let currentNode = map.get(secondPointer);

    // set its next variable which can be obtained by finding that val in map. , next can not be undefined so null
    currentNode.next = map.get(currentNode.next) || null;

    // set its random variable, .random can not be undefined so set to null
    currentNode.random = map.get(currentNode.random) || null;

    // move pointer
    secondPointer = secondPointer.next;
  }

  // at this point, you're head at map should be a copy
  return map.get(head);
};
