class Solution {
    public int minSubArrayLen(int target, int[] nums) {
         int left=0;
        int right=0;
        int min=Integer.MAX_VALUE;
        int temp=0;
        int length=nums.length-1;
        while(right<=length){

            if(temp<target&&right<=length){
                temp=temp+nums[right];

                

            }
            right++;
            //min=Math.min(min,right-left);

            while(temp>=target){
                // min=Math.min(min,right-left+1);
                temp=temp-nums[left];
                if(temp<target){
                    
                    left++;
                    min=Math.min(min,right-left+1);
                    break;
                }
                left++;
                // min=Math.min(min,right-left+1);

            }
            //min=Math.min(min,right-left);

//             if(temp<target){
//                 min=Math.min(min,right-left+1);
//             System.out.println("left:"+left);
//             System.out.println("right:"+right);
                
//             }

            // min=Math.min(min,right-left);


            
        }
        return min==Integer.MAX_VALUE?0:min;
        
    }
}