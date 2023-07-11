/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
    let dp = new Array(n + 1).fill(0).map(() => new Array(2).fill(0));
    dp[0][0] = 1;
    dp[0][1] = 1;
    dp[0][2] = 0;
    dp[0][3] = 0;
    let mod=Math.pow(10,9)+7
  
    for (let i = 1; i < n; i++) {
      dp[i][0] = (dp[i - 1][1])%mod;
      dp[i][1] = (dp[i - 1][1] + dp[i - 1][2] + dp[i - 1][3]+dp[i - 1][0])%mod;
      dp[i][2] = (dp[i - 1][0] + dp[i - 1][3])%mod;
      dp[i][3] = (dp[i - 1][0] + dp[i - 1][2])%mod;
    }
    return dp[n-1][1];
  };