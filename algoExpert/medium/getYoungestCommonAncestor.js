// This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  // Write your code here.

  // get respective depths
  const depth1 = getDepth(topAncestor, descendantOne),
    depth2 = getDepth(topAncestor, descendantTwo);

  // setting a decendant and deeper decendant based on depth
  const [decendant, deeperDecendant] =
    depth1 < depth2
      ? [descendantOne, descendantTwo]
      : [descendantTwo, descendantOne];

  // get the difference in depth
  const difference = Math.abs(depth1 - depth2);

  // go through and find top decendent
  return backTractToAncestor(decendant, deeperDecendant, difference);
}

const getDepth = (ancestor, decendant) => {
  // count for the ancestor
  let depth = 1;

  // increment while not ancestor
  while (decendant !== ancestor) {
    depth++;
    decendant = decendant.ancestor;
  }

  return depth;
};

const backTractToAncestor = (decendant, deeperDecendant, difference) => {
  // placing deeper on same level as decendant
  while (difference > 0) {
    deeperDecendant = deeperDecendant.ancestor;
    difference--;
  }

  // back tracking until they are the same, which is the ancestor
  while (deeperDecendant.name !== decendant.name) {
    decendant = decendant.ancestor;
    deeperDecendant = deeperDecendant.ancestor;
  }

  return decendant;
};
