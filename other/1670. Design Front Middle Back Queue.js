var FrontMiddleBackQueue = function () {
  //balance()
  l = [];
  r = [];
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  r.push(val);
  if (r.length > l.length) {
    l.push(r.shift());
  }
  //display()
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  if (l.length == r.length) {
    l.push(val);
  } else if (l.length  == r.length+ 1) {
    r.unshift(val);
  }
 //display()
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  l.unshift(val);
  if (l.length > r.length + 1) {
    r.unshift(l.pop());
  }
  //display()
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  if(r.length==0){
    if(l.length==0){
      return -1
    }
    else{
      return l.pop()
    }
    



  }
  let result=0
  result=r.pop();
  if (l.length > r.length + 1) {
    r.unshift(l.pop());
  }
 // display()
  return result
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
  if(l.length==0){
    return -1

  }
  let result=0
  if (l.length > r.length) {
    result=l.pop()
    
    
  } else {
    result=r.shift() ;
 
  }
  if (r.length > l.length) {
    l.push(r.shift());
  }
  //display()
  return result
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
  if(l.length==0){

      return -1





  }
  let result=l.shift();
  
  if (r.length > l.length) {
    l.push(r.shift());
  }
  //display()
  return result
};
display = function () {
  console.log(l+ " "+r)
 
}

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */