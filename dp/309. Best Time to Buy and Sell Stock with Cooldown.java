class Solution {
    public int maxProfit(int[] prices) {
        int dp[][]=new int[prices.length+1][3];
        if(prices.length==1){
            return 0;
        }
        dp[0][0]=0;//no stock
        dp[0][1]=0;//no stock// freez 
        dp[0][2]=-prices[0];//hold stock 

        for(int i=1;i<=prices.length;i++){
            dp[i][0]=Math.max(dp[i-1][0],dp[i-1][1]);
            dp[i][1]=dp[i-1][2]+prices[i-1];
            dp[i][2]=Math.max(dp[i-1][2],dp[i-1][0]-prices[i-1]);
                
        }
        return Math.max(dp[prices.length][0],dp[prices.length][1]);
        
    }
}