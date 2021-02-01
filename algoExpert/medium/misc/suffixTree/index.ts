interface TrieNode {
  [key: string]: TrieNode | boolean;
}

// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
export class SuffixTrie {
  root: TrieNode;
  endSymbol: string;

  constructor(string: string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string: string) {
    // Write your code here.

    // loop through
    for (let i = 0; i < string.length; i++) {
      this.createNode(i, string);
    }
  }

  createNode(index: number, string: string) {
    // create ref node to root
    let node = this.root as TrieNode;

    for (let j = index; j < string.length; j++) {
      const element = string[j];

      // if !node[element] {
      if (!node[element]) {
        // set node[element] = {}
        node[element] = {};
      }
      //

      // move node forward
      node = node[element] as TrieNode;
    }

    // when you're at the end of your string, add endSymbol to node and set to true
    node[this.endSymbol] = true;
  }

  contains(string: string) {
    // Write your code here.
    // set a node to tree

    let node = this.root as TrieNode;

    // loop through string
    for (const letter of string) {
      // if !node[letter] return false
      if (!node[letter]) return false;

      // move node forward, node = node[letter]
      node = node[letter] as TrieNode;
    }
    // at end, do you have the end symbol?
    return this.endSymbol in node && node[this.endSymbol] === true;
  }
}
