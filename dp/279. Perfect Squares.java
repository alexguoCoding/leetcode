class Solution {
    public int numSquares(int n) {
        int dp[]=new int[n+1];

        Arrays.fill(dp,10000);
        dp[0]=0;
        for(int i=1;i<=Math.sqrt(n);i++){
            for(int j=1;j<=n;j++){
                if(j-i*i>=0){
                     dp[j]=Math.min(dp[j],dp[j-i*i]+1);
                }
                
                   
            }
            
        }
        return dp[n];
    }
}.java