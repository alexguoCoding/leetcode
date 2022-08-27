class Solution {
    public int minDistance(String word1, String word2) {
        char[] ch1 = word1.toCharArray();
        char[] ch2 = word2.toCharArray();
        int l1=ch1.length;
        int l2=ch2.length;
        int[][] dp=new int[ch1.length+1][ch2.length+1];
        for(int i=1;i<=l1;i++){
            for(int j=1;j<=l2;j++){
                if(ch1[i-1]==ch2[j-1]){
                    dp[i][j]=dp[i-1][j-1]+1;
                }
                else{
                    dp[i][j]=Math.max(dp[i][j-1],dp[i-1][j]);
                }
            }
        }
         return   l1+l2-2*dp[l1][l2];               
    }
}