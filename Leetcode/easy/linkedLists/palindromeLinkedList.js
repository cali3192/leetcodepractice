/**
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// helper to reverse
const reverseList = (head) => {
  // current node, ref to previous and a temp
  let node = head;

  // prev needs to be null because it will be the node.next
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

const isPalindrome = (head) => {
  // find the midpoint using fast and slow pointers
  const fast = head;
  const slow = head;

  // fast moving 2x as fast as slow
  while (!!fast && !!fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // move fast to head
  fast = head;

  // reverse for a new linked list

  console.log("LOG: ", { reversedHalf });

  // slow is at head of half
  slow = reversedHalf;


  while (fast && slow) {
    if (fast.val !== slow.val) {
      return false;
    }
    fast = fast.next;
    slow = slow.next;
  }

  // while both exist, compare nodes
  return true;
};
