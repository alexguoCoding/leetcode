class Solution {
    public int maxSubArray(int[] nums) {
        int[] dp=new int[nums.length];
        if(nums.length==1){
            return nums[0];
        }
        dp[0]=nums[0];
        int max=dp[0];
        for(int i=1;i<nums.length;i++){
           

            
                dp[i]=Math.max(dp[i-1]+nums[i],nums[i]);
             // System.out.println(dp[i]);
               max=Math.max(dp[i],max);
            
            
        }
        return max;
        
    }
}