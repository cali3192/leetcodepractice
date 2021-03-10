/**
 * @param {number} capacity
 *
 */
var LRUCache = function (capacity) {
  // define capacity var
  this._capacity = capacity;

  // define storage map
  this.map = new Map();

  // counting the keys in store
  this.keysInStore = 0;
};

// helper method tracking most recently used and placing at end of map
LRUCache.prototype.markRecentlyUsed = function (key) {
  // getting the value in map that we will call last val
  const lastValue = this.map.get(key);

  // remove that value from map
  this.map.delete(key);

  // reset to be most recent - leveraging map ability to retain insertion order
  this.map.set(key, lastValue);
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  // if key in map
  if (!!this.map.has(key)) {
    // resetting this key to the end of the map
    this.markRecentlyUsed(key);

    // return the new value
    return this.map.get(key);
  }

  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */

// method to add to cache
LRUCache.prototype.put = function (key, value) {
  // if already in cache
  if (this.map.has(key)) {
    // delete existing entry
    this.map.delete(key);

    // set the NEW entry at the end of the map
    this.map.set(key, value);

    return;
  }

  // adding logic if at capacity
  if (this.keysInStore === this._capacity) {
    // get our least recently used value
    let oldestKey;

    // loop through map
    for (const [key, value] of this.map) {
      // getting first key in map aka oldest key
      oldestKey = key;

      // once we find oldest, stop loop
      break;
    }

    // delete the least recently used entry
    this.map.delete(oldestKey);

    // decrement num keys in store
    this.keysInStore--;
  }

  // room is freed so we can add to cache, add our new key val pair
  this.map.set(key, value);

  // update tracker
  this.keysInStore++;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
