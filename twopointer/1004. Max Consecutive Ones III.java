class Solution {
    public int longestOnes(int[] nums, int k) {
        int right=0;
        int left=0;
        int count=0;
        int max=0;
        while(right<nums.length){
            if(count<=k){
                if(nums[right]==0){
                    count++;
                }
            }
            while(count>k){
                if(nums[left]==0){
                    count--;

                    
                }
                left++;
            }
            right++;
            max=Math.max(right-left,max);

        }
        return max;
        
    }
}