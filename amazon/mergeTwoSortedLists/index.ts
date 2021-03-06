/**
 * 21. Merge Two Sorted Lists
 *
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
var mergeTwoLists = function (l1, l2) {
  // initialize dummy node
  let dummy = new ListNode(-1);

  // set head to dummy
  const head = dummy;

  // while either l1 or l2 are not null
  while (!!l1 || !!l2) {
    // cases to move l1 forward and place it on our dummy:
    // 1. we no longer have l2 nodes to explore
    // 2. l1 is less than l2
    if (!!l1 && (!l2 || l1.val <= l2.val)) {
      dummy.next = l1;
      l1 = l1.next;
    } else {
      dummy.next = l2;
      l2 = l2.next;
    }

    dummy = dummy.next;
  }

  // return all but the first dummy node (-1)
  return head.next;
};
