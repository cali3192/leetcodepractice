/**
 ** 206. Reverse Linked List
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const reverseList = (head) => {
  // current node, ref to previous and a temp
  let node = head;

  // prev needs to be null because it will be the node.next
  let prev = null;
  let temp = null;

  while (node) {
    // save ref to what comes after
    temp = node.next;

    // reverse pointer
    node.next = prev;

    // at this point, we updated temp - now update prev and node
    prev = node;
    node = temp;
  }

  // prev is now the head of the LL
  return prev;
};

const reverseList = (head) => {
  let prev = null,
    temp = null,
    node = head;

  while (!!node) {
    temp = node.next;

    node.next = prev;

    prev = node;
    node = temp;
  }

  return prev.next;
};
