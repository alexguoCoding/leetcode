class Solution {
    public int findLengthOfLCIS(int[] nums) {
        int max=1;
        int[]dp=new int[nums.length];
        Arrays.fill(dp,1);
        for(int i=1;i<nums.length;i++){
            if(nums[i-1]<nums[i]){
                dp[i]=dp[i-1]+1;
            }
            else{
                dp[i]=1;
            }
             max=Math.max(dp[i],max);
    

        }
        return max;
        
    }
}