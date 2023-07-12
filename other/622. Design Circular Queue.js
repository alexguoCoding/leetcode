/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    arr = new Array(k);
    end = -1;
    front = 0;
    count = 0;
    size = k;
  };
  
  /**
   * @param {number} value
   * @return {boolean}
   */
  MyCircularQueue.prototype.enQueue = function (value) {
    if (count == size) {
      return false;
    }
    if (end == size - 1) {
      end = 0;
    } else {
      end++;
    }
    arr[end] = value;
    count++;
     return true;
  };
  
  /**
   * @return {boolean}
   */
  MyCircularQueue.prototype.deQueue = function () {
    if (count == 0) {
      return false;
    }
    arr[front] = -1;
    if (front == size - 1) {
      front = 0;
    } else {
      front++;
    }
  
    count--;
     return true;
  };
  
  /**
   * @return {number}
   */
  MyCircularQueue.prototype.Front = function () {
      if(count==0){
          return -1
      }
    return arr[front];
  };
  
  /**
   * @return {number}
   */
  MyCircularQueue.prototype.Rear = function () {
      if(count==0){
          return -1
      }
    return arr[end];
  };
  
  /**
   * @return {boolean}
   */
  MyCircularQueue.prototype.isEmpty = function () {
    if (count == 0) {
      return true;
    }
    return false;
  };
  
  /**
   * @return {boolean}
   */
  MyCircularQueue.prototype.isFull = function () {
    if (count == size) {
      return true;
    }
    return false;
  };
  
  /**
   * Your MyCircularQueue object will be instantiated and called as such:
   * var obj = new MyCircularQueue(k)
   * var param_1 = obj.enQueue(value)
   * var param_2 = obj.deQueue()
   * var param_3 = obj.Front()
   * var param_4 = obj.Rear()
   * var param_5 = obj.isEmpty()
   * var param_6 = obj.isFull()
   */