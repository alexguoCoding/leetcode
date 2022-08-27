class Solution {
    public int search(int[] nums, int target) {
        int left=0;
        int right=nums.length-1;
        if(nums.length==1){
            return nums[0]==target?0:-1;
        }
        int lowestindex=0;  
        while(left<right){
            int mid=(left+right)/2;
            if(nums[mid]>nums[right]){
                left=mid+1;
            }
            else if(nums[mid]<nums[right]){
                right=mid;    
            }               
        }
        lowestindex=left;
        int result;
        left=0;
        right=nums.length-1;
        
        if(lowestindex==0){
               // System.out.println("1");
              result=binarysearch(nums,  0, right, target);
        }
        else{
            if(target>=nums[0]&&target<=nums[lowestindex-1]){
                result=binarysearch(nums,  0, lowestindex, target);
              
            }
            else{
                  result=binarysearch(nums,  lowestindex, right, target);
            }

            
        }

        return result;
        
    }
    public int binarysearch(int[] nums, int left,int right,int target) {
        while(left<right){
            int mid=(left+right)/2;
            if(nums[mid]>target){
                right=mid;
            }
            else if(nums[mid]<target){
                left=mid+1;    
            }
            else {
                return mid;
                
            }
                    // System.out.println(mid);
        }

        return nums[left]==target?left:-1;

    }
}