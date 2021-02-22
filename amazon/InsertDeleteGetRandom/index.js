/**
 * 380. Insert Delete GetRandom O(1)
 * 
 * Implement the RandomizedSet class:

bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
Follow up: Could you implement the functions of the class with each function works in average O(1) time?
 */

var RandomizedSet = function () {
  // storage where we store elems and indices
  this.storage = {};

  // our set
  this.set = [];
};

RandomizedSet.prototype.insert = function (val) {
  // if this val is present, return false
  if (this.storage[val] !== undefined) return false;

  // else
  // push to our set
  this.set.push(val);

  // store val and set length in storage
  this.storage[val] = this.set.length - 1;

  // return true for new elems
  return true;
};

RandomizedSet.prototype.remove = function (val) {
  // if val is not in set, false
  if (this.storage[val] === undefined) return false;

  // get set length
  let len = this.set.length - 1;

  // get the last index associated with val
  let index = this.storage[val];

  // key is last elem in set, and value is remove val
  this.storage[this.set[len]] = this.storage[val];

  // swap set at old index with last elem
  [this.set[index], this.set[len]] = [this.set[len], this.set[index]];

  // val we want to remove is now at end
  // so remove last elem
  this.set.pop();

  // delete val in storage obj
  return delete this.storage[val];
};

RandomizedSet.prototype.getRandom = function () {
  return this.set[Math.floor(this.set.length * Math.random())];
};
