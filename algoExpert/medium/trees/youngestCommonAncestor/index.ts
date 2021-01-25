// This is an input class. Do not edit.
class AncestralTree {
  name: string;
  ancestor: AncestralTree | null;

  constructor(name: string) {
    this.name = name;
    this.ancestor = null;
  }
}

export function getYoungestCommonAncestor(
  topAncestor: AncestralTree,
  descendantOne: AncestralTree,
  descendantTwo: AncestralTree
) {
  // Write your code here.

  // get the depths of your decendants
  const decOneDepth = getNodeDepth(descendantOne, topAncestor);
  const decTwoDepth = getNodeDepth(descendantTwo, topAncestor);

  // get the difference
  let diff = Math.abs(decOneDepth - decTwoDepth);

  // set top and bottome decendant based on height
  let topDecendant = decOneDepth <= decTwoDepth ? descendantOne : descendantTwo;
  let botDecendant = decOneDepth > decTwoDepth ? descendantOne : descendantTwo;

  // move botDec to top level
  while (!!botDecendant.ancestor && diff > 0) {
    botDecendant = botDecendant.ancestor;
    diff--;
  }

  // while their ancesors are different, move decendants up
  while (
    !!topDecendant.ancestor &&
    !!botDecendant.ancestor &&
    topDecendant.name !== botDecendant.name
  ) {
    topDecendant = topDecendant.ancestor;
    botDecendant = botDecendant.ancestor;
  }

  // bottom and top decentdant are same at this point so return either
  return topDecendant;
}

const getNodeDepth = (
  decedant: AncestralTree["ancestor"],
  topAncestor: AncestralTree
): number => {
  let depth = 1;

  let decedantRef = decedant;

  while (!!decedantRef && decedantRef.name !== topAncestor.name) {
    depth++;
    decedantRef = decedantRef.ancestor;
  }

  return depth;
};
