/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  l = nums.length;
  let dp = new Array(l).fill(0).map(() => new Array(2).fill(0));
 // console.log(dp);
  dp[0][0]=1
  dp[0][1]=1
  //dp[i][j] :1 pos 0 neg
  for (let i = 1; i < l; i++) {
  
      if (nums[i] - nums[i - 1] > 0) {
        dp[i][1] = Math.max(dp[i - 1][0] + 1, dp[i - 1][1]);
      } else if (nums[i] - nums[i - 1] < 0) {
        dp[i][0] = Math.max(dp[i - 1][1] + 1, dp[i - 1][0]);
      }
      else{
          dp[i][1]=dp[i - 1][1]
          dp[i][0]=dp[i - 1][0]

      }

    
  }
  return Math.max(dp[l-1][1] , dp[l-1][0]);
};
