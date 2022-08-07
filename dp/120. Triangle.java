class Solution {
    public int minimumTotal(List<List<Integer>> triangle) {
        int n=triangle.size();
        int [][]dp=new int[n][n];
        // for(int i=0;i<n;i++){
        //        dp[i][0] = triangle.get(0).get(0);
        //        dp[i][n-1] = triangle.get(n-1).get(n-1);
        // }\
         dp[0][0]=triangle.get(0).get(0);
        for(int i=1;i<n;i++){
            for(int j=0;j<i+1;j++){
                if(j==0){
                    // dp[i][j]=dp[i-1][j]+dp[i][j];
                    dp[i][j]=triangle.get(i).get(j)+ dp[i-1][j];
                }
                else if(j==i){
                    dp[i][j]=triangle.get(i).get(j)+ dp[i-1][j-1];
                    // dp[i][j]=dp[i-1][j]+dp[i][j];
                }
                else{
                    dp[i][j]=Math.min(dp[i-1][j-1],dp[i-1][j])+triangle.get(i).get(j);
                    //dp[i][j]=triangle.get(i).get(j);
                    // dp[i][j]=Math.min()
                    //System.out.println(dp[i][j]);
                }
                
            }

        }
        int max=1000000;
        for(int i=0;i<n;i++){
            max=Math.min(dp[n-1][i],max);
           // System.out.println(dp[i][j]);
        }
        return max;
        
        
    }
}