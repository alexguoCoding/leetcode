class Solution {
    public boolean canPartition(int[] nums) {
        int sum=0;
        for(int i=0;i<nums.length;i++){
            sum+=nums[i];
        }
        if(sum%2==1){
            return false;
        }
        int target=sum/2;
        
        boolean [][]dp=new boolean[nums.length+1][target+1];
        dp[0][0]=true;
        for(int i=1;i<target+1;i++){
            dp[0][i]=false;
        }
        for(int i=1;i<=nums.length;i++){

            int cur=nums[i-1];

            for(int j=0;j<=target;j++){
                if(j>=cur){
                    dp[i][j]=dp[i-1][j]||dp[i-1][j-cur];
                }
                else{
                    dp[i][j]=dp[i-1][j];
                }
               
            }
        }

        return dp[nums.length][target];
    }
}