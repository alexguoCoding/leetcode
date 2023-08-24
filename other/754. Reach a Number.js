/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
    let temp = 1;
    let sum = 0;
    let times = 0;
    target=Math.abs(target)
    while (sum < target) {
      sum += temp;
      temp++;
      times++;
    }
    console.log(times,sum)
    if(sum==target){
        return times;
    }
    if((target-sum)%2==0){
        return times
    }
    else{
      if(temp%2==1){
   return times+1
      }
      else{
        return times+2
      }
        
    }
  
  
  };
  