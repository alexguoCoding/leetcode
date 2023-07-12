/**
 * @param {number} k
 */
const Node = function (val) {
  this.next = null;
  this.pre = null;
  this.val = val;
};

var MyCircularDeque = function (k) {
  PreL = new Node();
  PreR = new Node();
  PreL.next = PreR;
  PreR.pre = PreL;
  sum = 0;
  cap = k;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (cap == sum) {
    return false;
  }
  let tempNode = new Node(value);
  let save = PreL.next;
  PreL.next = tempNode;
  tempNode.pre = PreL;
  save.pre = tempNode;
  tempNode.next = save;
  sum++;
  return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (sum == cap) {
    return false;
  }
  let tempNode = new Node(value);
  let save = PreR.pre;
  PreR.pre = tempNode;
  tempNode.next = PreR;
  save.next = tempNode;
  tempNode.pre = save;
  sum++;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (sum == 0) {
    return false;
  }
  PreL.next = PreL.next.next;
  PreL.next.pre = PreL;
  sum--;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (sum == 0) {
    return false;
  }
  PreR.pre = PreR.pre.pre;
  PreR.pre.next = PreR;
  sum--;
  return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (sum == 0) {
    return -1;
  }
  return PreR.pre.val;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (sum == 0) {
    return -1;
  }
  return PreL.next.val;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  if (PreL.next == PreR) {
    return true;
  }
  return false;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  if (sum == cap) {
    return true;
  }
  return false;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */