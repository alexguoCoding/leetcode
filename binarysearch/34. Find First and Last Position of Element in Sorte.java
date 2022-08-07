class Solution {
    public int[] searchRange(int[] nums, int target) {
        int l=0,r=nums.length-1;
        int mid=0;
            int[] result= new int[2];
            result[0]=findleft(nums,target);
            result[1]=findright(nums,target);
        return result;
    }
    public int findleft(int[] nums, int target) {
        int l=0,r=nums.length-1;
        int mid=0;
        int le=-1;
        while(l<=r){
             mid=(l+r)/2;
            if(nums[mid]==target){
                r=mid-1;
                le=mid;
            }
            else if(nums[mid]>target){
                r=mid-1;
            }
            else{
                l=mid+1;
            }

        }
        return le;
    }
    public int findright(int[] nums, int target) {
        int l=0,r=nums.length-1;
        int re=-1;
        int mid=0;
        while(l<=r){
             mid=(l+r)/2;
            if(nums[mid]==target){
               l=mid+1;
                re=mid;
            }
            else if(nums[mid]>target){
                r=mid-1;
            }
            else{
                l=mid+1;
            }

        }
        return re;
    
        
    }
    
}