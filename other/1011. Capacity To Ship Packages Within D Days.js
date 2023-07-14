/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let maxCap = 0;
  for (let i of weights) {
    maxCap += i;
  }

 
  let check = function (mid) {
    let newday = 0;
    let sum = 0;

    for (let i = 0; i < weights.length; i++) {
      sum += weights[i];

    if(weights[i]>mid){
        return false
    }
      
      if (sum > mid) {
        sum = weights[i];
        newday++;
      }
    }
    if (sum > 0) {
      newday++;
    }
    if (newday > days) {
      return false;
    }
    return true;
  };
  let left = 0;
  let right = maxCap + 1;
  while (left + 1 != right) {
      let mid = Math.floor((left + right) / 2)
      
    
    if (check(mid)) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return right;
};