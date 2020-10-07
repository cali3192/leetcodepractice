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
  let prev = null;
  let temp = null;

  while (node) {
    // save ref
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
