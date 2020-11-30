/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

/**
 ** Solution 1
 *
 * Runtime:
 * 84 ms, faster than 70.65% of JavaScript online submissions for Linked List Cycle.
 *
 * Memory Usage:
 * 40.8 MB, less than 24.21% of JavaScript online submissions for Linked List Cycle.
 *
 */

const hasCycle = (head) => {
  // create a slow and fast pointer
  let fast = head;
  let slow = head;

  // fast or slow should never see null - need slow so that you can update
  while (slow && fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;

    // if fast catches up with slow - cycle
    if (fast === slow) {
      return true;
    }
  }

  return false;
};
