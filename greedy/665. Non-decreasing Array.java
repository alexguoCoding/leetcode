class Solution {
    public boolean checkPossibility(int[] nums) {
        int count=0;
         for (int i = 0; i < nums.length-1; i++) { 
             if (nums[i]>nums[i+1]) {
                count++;
                 
                 if(count>=2){
                    return false;
                 }
             }

         }


        count=0;
        for (int i = 1; i < nums.length-2; i++) { 
            if (nums[i]>nums[i+1]) {

                 if(nums[i+1]>nums[i+2]){
                     return false;

                 }
                 else{
                     if(nums[i]>nums[i+2]){
                         nums[i]=nums[i+1];
                         if(nums[i]<nums[i-1]){
                             return false;
                             
                        }
                         else{
                             count++;
                    }


                         
                    }
  
                }
    
             }


         }
                if(count>=2){
                    return false;
                 }
        else{
            return true;
        }
    }
}