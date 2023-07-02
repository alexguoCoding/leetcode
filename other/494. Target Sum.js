/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let result=0



  dfs=function(n,sum){
      if(n==nums.length){
          if(sum==target){
              result++;

          }
          return 

      }
    dfs(n+1,sum+nums[n])
    dfs(n+1,sum-nums[n])

  }
  dfs(0,0)
  return result
    
};