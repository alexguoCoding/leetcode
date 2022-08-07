class Solution {
    public int minCostClimbingStairs(int[] cost) {
        int cost2[]= new int[cost.length+1];
         int dp[]=new int[cost2.length];
        for(int i=0;i<cost.length;i++){
            cost2[i]=cost[i];

        }
        cost2[cost2.length-1]=0;
        
        dp[0]=cost2[0];
        dp[1]=cost2[1];
        for(int i=2;i<cost2.length;i++){
            dp[i]=Math.min(dp[i-1],dp[i-2])+cost2[i];

        }
        return  dp[cost2.length-1];
    }
}