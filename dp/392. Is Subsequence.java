class Solution {
    public boolean isSubsequence(String s, String t) {
        char[] c1 = s.toCharArray();
        char[] c2 = t.toCharArray();
        int l1=c1.length;
        int l2=c2.length;
        int max=0;
        int dp[][]=new int[l1+1][l2+1];
        dp[0][0]=0;
        for(int i=1;i<=l1;i++){
            for(int j=1;j<=l2;j++){
                if(c1[i-1]==c2[j-1]){
                    dp[i][j]=dp[i-1][j-1]+1;
                }
                else{
                    // dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]);
                    dp[i][j]=dp[i][j-1];
                }
                max=Math.max(dp[i][j],max);
                // System.out.println(max);
                
           
            }
            
        }
        return max==l1?true:false;
        
    }
}