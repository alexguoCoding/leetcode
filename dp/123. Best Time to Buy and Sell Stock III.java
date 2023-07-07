class Solution {
    public int maxProfit(int[] prices) {
        int[][] dp= new int[prices.length][5];
            dp[0][0]=0;
            dp[0][1]=-prices[0];//firstbuyand hold
            dp[0][2]=0;//nothing after first
            dp[0][3]=-prices[0];//;//secondhold
            dp[0][4]=0;//nothing after second
        for(int i=1;i<prices.length;i++){
            dp[i][0]= dp[i-1][0];
            dp[i][1]=Math.max(dp[i-1][1],dp[i-1][0]-prices[i]);
            dp[i][2]=Math.max(dp[i-1][2],dp[i-1][1]+prices[i]);
            dp[i][3]=Math.max(dp[i-1][3],dp[i-1][2]-prices[i]);
            dp[i][4]=Math.max(dp[i-1][4],dp[i-1][3]+prices[i]);
            
        }
        return Math.max(dp[prices.length-1][2],dp[prices.length-1][4]);
        
    }
}