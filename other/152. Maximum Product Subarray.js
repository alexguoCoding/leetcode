/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    l = nums.length;
    let dp = new Array(l).fill(0).map(() => new Array(2).fill(0));
    // console.log(dp);
  dp[0][0]=nums[0]
  dp[0][1]=nums[0]
  let result=nums[0]
  
    //dp[i][j] :1 pos 0 neg
    for (let i = 1; i < l; i++) {
     // console.log( dp[i - 1][1]*nums[i],dp[i - 1][0]*nums[i])
    
        dp[i][1] = Math.max(dp[i - 1][1]*nums[i], dp[i - 1][0]*nums[i],nums[i]);
        dp[i][0] = Math.min(dp[i - 1][1]*nums[i], dp[i - 1][0]*nums[i],nums[i]);
        result=Math.max(result,dp[i][1],  dp[i][0])
      
    }
  
  
    return result;
  };
  