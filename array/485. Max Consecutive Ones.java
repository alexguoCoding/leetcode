class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int result=0;
        int amount=0;
        int i=0;
        for (int j = 0; j < nums.length; j++) {
            if(nums[j]==1){
                amount=1;
                result=1;
            }


        }
        if(result==0){
            return 0;
        }
         for (int j = 1; j < nums.length; j++) {


             if(nums[i]==1&&nums[j]==1){
                 amount++;
                }
             else{
                 if(result<amount){
                     result=amount;

                    
                }
                 amount=1;

             }
                
             if(result<amount){
                     result=amount;
                    }

            i++;

        }

        return result;
        
    }
}