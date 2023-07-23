/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  if(n==1){
    return 0
  }
  let dfs=function(sum,lastpast,time){
    if(sum==n){
      return time

    }
    else if(sum>n){
      return Number.MAX_VALUE

    }


 
    return Math.min(dfs(sum+lastpast,lastpast,++time), dfs(sum+sum,sum,++time))



  }
  return dfs(1,1,0)+1
    
};