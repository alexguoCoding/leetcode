/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let saveDelete = new Map();
  let MaxQueue = new PriorityQueue({
    compare: (a, b) => {
      return b - a;
    },
  });

  for (let right = 0; right < k; right++) {
    MaxQueue.enqueue(nums[right]);
  }
  let left = 0;
  let result = [];
  for (let right = k; right < nums.length; right++) {
      //console.log(MaxQueue.toArray())
       //console.log(right,left);
    if (right - left == k) {
       
      result.push(MaxQueue.front());
    }
    if (nums[left] == MaxQueue.front()) {

        // console.log(left,result[left],MaxQueue.front())
      MaxQueue.dequeue();
      while (saveDelete.has(MaxQueue.front())) {
        if (saveDelete.get(MaxQueue.front())==1) {
          saveDelete.delete(MaxQueue.front());
        } else {
          saveDelete.set(MaxQueue.front(), saveDelete.get(MaxQueue.front()) - 1);
        }

         MaxQueue.dequeue();
      }
    } else {
      if (!saveDelete.has(nums[left])) {
        saveDelete.set(nums[left], 1);
      } else {
        saveDelete.set(nums[left], saveDelete.get(nums[left]) + 1);
      }
    }
    left++;
  
    MaxQueue.enqueue(nums[right])
   
  }
   result.push(MaxQueue.front());
  
  return result;
};
