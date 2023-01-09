class Solution {
    public int singleNonDuplicate(int[] nums) {
        int left=0;
        int right=nums.length-1;
        int l=nums.length-1;
        if(nums.length==1){
            return nums[0];
        }
        while(left<right){
            int mid=(left+right)/2;
            // if((nums[mid]!=nums[mid-1])&&nums[mid+1]!=nums[mid]){
            //     return nums[mid];
            // }

                if((mid)%2==1){
                    if(nums[mid]==nums[mid-1]){
                       left=mid+1;
                    }
                    else{
                        right=mid;
                    }
                    
                }
                else if((mid)%2==0){
                    if(nums[mid]==nums[mid+1]){
                       left=mid+1;
                    }
                    else{
                        right=mid;
                    }
                    
                }          

            
        }
        return nums[left];

            
        
    }
}..java