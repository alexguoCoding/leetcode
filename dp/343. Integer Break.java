class Solution {
    public int integerBreak(int n) {
        int[] dp=new int[n+1];
        dp[2]=1;
        dp[1]=0;
        for(int i=3;i<n+1;i++){
            int num=0;
            for(int j=1;j<i;j++){
                    num=Math.max(num,Math.max(j*(i-j),j*dp[i-j]));
                        
            }
            dp[i]=num;


        }
        return dp[n];
        
    }
}