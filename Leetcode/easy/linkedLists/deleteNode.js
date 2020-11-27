/**
 * 237. Delete Node in Linked List
 *
 * Write a function to delete a node in a singly-linked list.
 * You will not be given access to the head of the list, instead
 * you will be given access to the node to be deleted directly.
 *
 * It is guaranteed that the node to be deleted is not a tail node in the list.
 *
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

/**
 * Solution 1
 *
 * Runtime: 68 ms, faster than 99.75%
 * Memory Usage: 40.9 MB, less than 5.08%
 *
 */

const deleteNode = (node) => {
  if (node.val === null || node.next === null) {
    return null;
  }

  // assignments must be given to the LL properties, val and next
  node.val = node.next.val;
  node.next = node.next.next;
};
