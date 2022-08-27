class Solution {
    public boolean canJump(int[] nums) {
        int l1=nums.length;
        boolean[] dp=new boolean[l1];
        Arrays.fill(dp,false);
        dp[0]=true;
        if(l1==1){
            return true;
        }
        int right=0;
        for(int i=0;i<=right;i++){
             right=Math.max(right,i+nums[i]);
           // System.out.println(right);
                if(right>=l1-1){
                    return true;
                }
        }

        


        return false;
        
        
    }
}