class Solution {
    public int jump(int[] nums) {
        int l1=nums.length;
        int []dp=new int[l1];

        Arrays.fill(dp,Integer.MAX_VALUE);
        dp[0]=0;
        for(int i=0;i<l1;i++){
            for(int j=0;j<=nums[i];j++){
                if(i+j>=l1){
                    continue;
                }
                else{
                    dp[i+j]=Math.min(dp[i+j],dp[i]+1);
                    // System.out.println(dp[i+j]);
                }
            }
            
        }
        
        return  dp[l1-1];
    }
}