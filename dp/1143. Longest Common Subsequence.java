class Solution {
    public int longestCommonSubsequence(String text1, String text2) {
        char[] ch1 = text1.toCharArray();
        char[] ch2 = text2.toCharArray();
        int l1=ch1.length;
        int l2=ch2.length;

        int result=0;
        int[][] dp=new int[l1+1][l2+1]; 
        for(int i=1;i<=l1;i++){
            for(int j=1;j<=l2;j++){
                if(ch1[i-1]==ch2[j-1]){
                    dp[i][j]=dp[i-1][j-1]+1;
                }
                else{
                    dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]);
                }

             
                
                
            }
        }
        return dp[l1][l2];

    }
}