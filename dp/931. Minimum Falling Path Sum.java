class Solution {
    public int minFallingPathSum(int[][] matrix) {
        int n=matrix.length;
        int [][] dp=new int[n][n];
        for(int j=0;j<n;j++){
            dp[0][j]=matrix[0][j];
            
        }
        for(int i=1;i<n;i++){
            for(int j=0;j<n;j++){
                if(j==0){
                    dp[i][j]=Math.min(dp[i-1][j],dp[i-1][j+1])+matrix[i][j];
                    
                }
                else if(j==n-1){
                    dp[i][j]=Math.min(dp[i-1][j-1],dp[i-1][j])+matrix[i][j];
                }
                else{
                    int temp=Integer.MAX_VALUE;
                    temp=Math.min(temp,dp[i-1][j-1]);
                    temp=Math.min(temp,dp[i-1][j]);
                    temp=Math.min(temp,dp[i-1][j+1]);
                    
                    dp[i][j]=temp+matrix[i][j];
                  
                }
               
                  // System.out.println(dp[i][j]);
                
            }
             // System.out.println();

            
        }
        int min=Integer.MAX_VALUE;
        for(int i=0;i<n;i++){
            min=Math.min(min,dp[n-1][i]);
             //System.out.println(matrix[n-1][i]);
            
        }
        
        return min;
        
        
    }
}