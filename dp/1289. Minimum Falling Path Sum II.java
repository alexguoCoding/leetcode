class Solution {
    int [][] dp;
    int n;
    public int minFallingPathSum(int[][] grid) {
         n=grid.length;
        dp=new int[n][n];
        
        for(int j=0;j<n;j++){
            dp[0][j]=grid[0][j];
            
        }
        for(int i=1;i<n;i++){
            for(int j=0;j<n;j++){
                int min=Integer.MAX_VALUE;
                min=smallest(i-1,j);
                if(j==0){
                    
                    dp[i][j]=min+grid[i][j];
                    
                }
                else if(j==n-1){
                    // min=smallest(i,j);
                    dp[i][j]=min+grid[i][j];
                }
                else{
                    // int temp=Integer.MAX_VALUE;
                    // temp=Math.min(temp,dp[i-1][j-1]);
                    // temp=Math.min(temp,dp[i-1][j+1]);
                     //min=smallest(i,j);
                    
                    dp[i][j]=min+grid[i][j];    
                }
                //System.out.println(dp[i][j]);
            }
       // System.out.println(matrix[i][j]);

            
        }
        int min=Integer.MAX_VALUE;
        for(int i=0;i<n;i++){
            min=Math.min(min,dp[n-1][i]);
             //System.out.println(matrix[n-1][i]);
            
        }
        
        return min;
        
    }
    public int smallest(int height,int m){
        int lowest=Integer.MAX_VALUE;
        for (int j=0;j<n;j++){
            if(j!=m){
                lowest=Math.min(dp[height][j],lowest);
            }
           
            
            }
        // System.out.println("lowest"+lowest);
        return lowest;
        
    }
}