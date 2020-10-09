/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const mergeTwoLists = (l1, l2) => {
  // create dummy node
  let dummy = new ListNode(-1);

  const head = dummy;

  // while either exists
  while (!!l1 || !!l2) {
    // can only move is l1 does exist - so you can make the comparison
    if (l1 && (!l2 || l1.val <= l2.val)) {
      dummy.next = l1;
      l1 = l1.next;
    } else {
      dummy.next = l2;
      l2 = l2.next;
    }
    // move the dummy forward
    dummy = dummy.next;
  }
  return head.next;
};
