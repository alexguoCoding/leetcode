class Solution {
    public int coinChange(int[] coins, int amount) {
        int[]dp=new int[amount+1];
        Arrays.fill(dp,100000);
        
        dp[0]=0;
        for(int i=1;i<=coins.length;i++){

            for(int j=1;j<=amount;j++){
                if(j>=coins[i-1]){
                    dp[j]=Math.min(dp[j],dp[j-coins[i-1]]+1);
                }

                
            }
        }
       // System.out.println( dp[amount]);
       return  dp[amount]==100000 ? -1:dp[amount];
        // return 2;
        
        
    }
}