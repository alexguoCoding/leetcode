/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    let day=prices.length
    console.log(Number.NEGATIVE_INFINITY)
    let dp=new Array(day+1).fill(Number.NEGATIVE_INFINITY).map(()=>new Array(k+1).fill(Number.NEGATIVE_INFINITY).map(()=>new Array(2).fill(Number.NEGATIVE_INFINITY)))
   for(let i=1;i<=prices.length;i++){
        dp[i][0][1]=Number.NEGATIVE_INFINITY
         dp[i][0][0]=0
   }

    for(let i=1;i<=prices.length;i++){
        for(let j=1;j<=k;j++){
            if(i-1==0){
            dp[i][j][0]=0
            dp[i][j][1]=-prices[i-1]
                continue;
            }

            dp[i][j][0]=Math.max(dp[i-1][j][0],dp[i-1][j][1]+prices[i-1])
            dp[i][j][1]=Math.max( dp[i-1][j-1][0]-prices[i-1],dp[i-1][j][1])
        }

    }
    return  dp[day][k][0]
};