/**
 * 19. Remove Nth Node From End of List
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * resource: https://www.youtube.com/watch?v=Kka8VgyFZfc
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const testNode = new ListNode(-1);
// console.log("LOG: testNode", testNode);

const removeNthFromEnd = (head, n) => {
  // set fast and slow pointers
  let fast = head;
  let slow = head;

  // placeholder node
  let prev = null;

  // place fast n spaces ahead of slow
  while (n > 0) {
    fast = fast.next;
    n--;
  }

  // move fast and slow with n spaces between
  while (fast !== null) {
    fast = fast.next;
    prev = slow;
    slow = slow.next;
  }

  if (prev === null) {
    return head.next;
  }

  prev.next = slow.next;
  slow.next = null;

  return head;
};

/**
 * if console in second while
 * {
  fast: [3,4,5],
  fastNext: [4,5],
  slow: [1,2,3,4,5],
  slowNext: [2,3,4,5],
  prev: null
}
{
  fast: [4,5],
  fastNext: [5],
  slow: [2,3,4,5],
  slowNext: [3,4,5],
  prev: [1,2,3,4,5]
}
{
  fast: [5],
  fastNext: null,
  slow: [3,4,5],
  slowNext: [4,5],
  prev: [2,3,4,5]
}
 */

// const removeNthFromEnd = (head, n) => {
//   // set pointers
//   let fast = head;
//   let slow = head;

//   // get fast n spaces ahead of slow
//   while (n > 0) {
//     fast = fast.next;
//     n--;
//   }

//   // store ref to prev
//   let prev = null;

//   // while fast !== null, increment both
//   while (fast !== null) {
//     fast = fast.next;
//     prev = slow;
//     slow = slow.next;
//   }

//   // if prev = null at this point, return head.next
//   if (prev === null) {
//     return head.next;
//   }

//   // at this point, fast is null and slow should be at the elem we want to remove
//   // to remove slow
//   // prev.next will now be what slow.next is
//   // and slow.next is null, just floating away
//   prev.next = slow.next;
//   slow.next = null;

//   return head;
// };

/**
 *
 ** Using a dummy node
 */
const removeNthFromEnd = (head, n) => {
  // instatiate dummy node - avoids the weird edge case
  let dumbo = new ListNode(-1, head);

  // set pointers - in this case, we want slow at dumbo!
  let fast = head;
  let slow = dumbo;

  // get fast n spaces ahead of slow, in this case n should greater than 0
  while (n > 0) {
    fast = fast.next;
    n--;
  }

  // while fast !== null, increment both
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return dumbo.next;
};

const head = [1, 2, 3, 4, 5];
const n = 2;
const textRemoveNthNode = removeNthFromEnd(head, n);
console.log("LOG: textRemoveNthNode", textRemoveNthNode);
