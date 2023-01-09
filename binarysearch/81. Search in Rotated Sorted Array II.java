class Solution {
    public boolean search(int[] nums, int target) {
        int left=0;
        int right=nums.length-1;
        int lowest=0;
        while(left<right){
            int mid=(left+right)/2;
            if(nums[mid]==target){
                return true;
                
            }
            if(nums[mid]> nums[right]){
                if(nums[left]<=target&&target<nums[mid]){
                    right=mid;
                    
                }
                else {
                    left=mid+1;
                    
                }
                
                
                
            }
            else if (nums[mid]< nums[right]){
                if(nums[mid]<target&&target<=nums[right]){
                    left=mid+1;
                    
                }
                else {
                    right=mid;
                    
                }
                
            }
            else if (nums[mid]== nums[right]){
                
                right--;
                
            }

            
        }
        return nums[left]==target?true:false;

    }

}