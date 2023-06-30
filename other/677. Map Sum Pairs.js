var MapSum = function () {
  this.parent = new Node();
};
var Node = function () {
  this.value = 0;
  this.array = new Array(26).fill(null);
  this.end = false;
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  let child = this.parent;

  for (let c of key) {
    let pos = c.charCodeAt() - "a".charCodeAt();
    if (child.array[pos] == null) {
      child.array[pos] = new Node();
    }
    child = child.array[pos];
  }
  child.value = val;
  child.end = true;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  this.result = 0;
  let child = this.parent;
  for (let c of prefix) {
    let pos = c.charCodeAt() - "a".charCodeAt();
    //console.log(pos)
    if (child.array[pos] != null) {
      child = child.array[pos];
    }
    else  {
     return 0
    }
  }
  //console.log(child)

  this.dfs(child);
  return this.result;
};
MapSum.prototype.dfs = function (node) {
  if (node.end == true) {
    //console.log(node.value)
    this.result += node.value;
    
  }
  // console.log(node)
  for (let i = 0; i < 26; i++) {
    //console.log(i)
    if (node.array[i] != null) {
      //console.log(i)
      this.dfs(node.array[i]);
    }
  }
  return;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */