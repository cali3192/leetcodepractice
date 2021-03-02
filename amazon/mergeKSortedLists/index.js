/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */


var mergeKLists = function (lists) {
  const nodes = [];

  // populating our nodes
  for (list of lists) {
    while (!!list) {
      nodes.push(list.val);
      list = list.next;
    }
  }

  // sorting from smallest to largest
  nodes.sort((a, b) => b - a);

  // creating a new list by passing in the node val and the acc in the constructor
  const result = nodes.reduce(
    (acc, val) => (acc = new ListNode(val, acc)),
    null
  );

  console.log({ result });

  return result;
};

// divide and conquer
// time: On * log(k) -> log from recursion with k being the recursive calls
var mergeKLists = function (lists) {
  if (lists === null || lists.length === 0) return null;

  let start = 0, // 0
    end = lists.length; // 2;

  return merge(lists, start, end);
};

const mergeLists = (lists, start, end) => {
  // base case: startIndex = endIndex and we have a single list
  if (start === end) {
    // we have a single list, which should be at start
    return lists[start];
  }
  let halfWay = start + Math.floor((start + end) / 2); // handle overflows

  let left = mergeLists(lists, start, halfWay);
  let right = mergeLists(lists, halfWay + 1, end);

  return merge(left, right);
};

const merge = (listOne, listTwo) => {
  // dummy value
  let result = new ListNode(-1);
  let curr = result;

  // while either is tru
  while (!!listOne || !!listTwo) {
    //
    if (listOne === null) {
      // if listOne is null, then we are dealing with a value and we can move curr adn l2
      curr.next = listTwo;
      listTwo = listTwo.next;
    } else if (listTwo === null) {
      curr.next = listOne;
      listOne = listOne.next;

      // neither are null
    } else {
      curr.next = listTwo;
      listTwo = listTwo.next;
    }

    curr = curr.next;
  }

  // result next bc we start at a dummy value
  return result.next;
};
