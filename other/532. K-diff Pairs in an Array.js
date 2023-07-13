/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  let set = new Set();
  let visit = new Set();
  let result = 0;
  if (k != 0) {
    for (let n of nums) {
      set.add(n);
    }
    for (let n of nums) {
      if (!visit.has(n)) {
        visit.add(n);
        if (set.has(n + k)) {
          result++;
        }
        if (set.has(n - k)) {
          result++;
        }
      }
    }
    return result / 2
  }
  else{
      let map=new Map()
    for (let n of nums) {
      
      if(!map.has(n)){
          map.set(n,1)
      }
      else if(map.get(n)==1){
          result++
          map.set(n,2)
      }
    }
    return result
  }

  
};