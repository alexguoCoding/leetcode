class Solution {
    public int findMaxForm(String[] strs, int m, int n) {

        int [][][]dp=new int[strs.length+1][m+1][n+1];

        
        for(int i=0;i<=strs.length;i++){
            if(i==0) continue;
            for(int j=0;j<=m;j++){
                for(int k=0;k<=n;k++){
                    int zeros=0;
                    int ones=0;
                    for (char ch :strs[i-1].toCharArray()) {
                        if (ch == '0') {
                            zeros++;
                        } else {
                            ones++;
                        }
                    }
                    if(j>=zeros&&k>=ones){
                        dp[i][j][k]= Math.max(dp[i-1][j][k],dp[i-1][j-zeros][k-ones]+1);
 
                        
                    }
                    
                    else{
                        dp[i][j][k]=dp[i-1][j][k];
                    }
                    
                }
            }
            
        }
        
        return dp[strs.length][m][n];
        
    }

}