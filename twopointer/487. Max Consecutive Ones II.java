class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int length=nums.length;
        int left=0;
        int right=0;
        int sum=0;
        int count0=0;
        
        
        
        while(right<length){
            if(count0<2){
                if(nums[right]==0){
                    count0++;   
                }            
            }
            while(count0==2){
                if(nums[left]==0){
                    count0--;
                   left++;
                    if(count0<2){
                        break;
                    }
                    
                }
                else{
                     left++;
                }

            

                
                
                
            }
            right++;
//             System.out.print("left"+left);
//             System.out.println("right"+right);
            
            
            sum=Math.max(sum,right-left);
            // right++;
            
        }
        return sum;
        
        
    }
}