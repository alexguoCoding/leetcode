class Solution {
    

    public int maxProfit(int[] prices) {
        int dp[][] =new int[prices.length+1][2];
        dp[0][0]=0;
        dp[0][1]=-prices[0];//hold earn money
        for(int i=1;i<=prices.length;i++){
            dp[i][0]=Math.max(prices[i-1]+dp[i-1][1],dp[i-1][0]);
            dp[i][1]=Math.max(dp[i-1][0]-prices[i-1],dp[i-1][1]);
        }
        return dp[prices.length][0];
        // return Math.max(dp[prices.length][0],dp[prices.length][1]);
        
    }
}