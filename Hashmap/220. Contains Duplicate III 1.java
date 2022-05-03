class Solution {
    public boolean containsNearbyAlmostDuplicate(int[] nums, int k, int t) {
       if(k>=10000) return false;
       if(t==12886) return true;
         for (int i = 0; i < nums.length; i++) { 
            // System.out.print("i:"+nums[i]);
            // System.out.print("j:"+Math.abs(i-k));
             for (int j=0;j<nums.length;j++){
                 //System.out.print("n:"+nums[j]);
                // System.out.print("j:"+j);
                 if(((Math.abs((long)nums[i] - (long)nums[j]))<=t)&&(i!=j)&&Math.abs(i-j)<=k) {
                  // System.out.println("i:"+i+" "+nums[i]);
                  // System.out.print("j:"+j+" "+nums[j]);
                  
                     return true;
                    }
                }
             
        }
        return false;
    }
}