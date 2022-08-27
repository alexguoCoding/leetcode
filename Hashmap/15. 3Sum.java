class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        int l1=nums.length;
        Arrays.sort(nums);
         Map<Integer,Integer>map=new HashMap<>();

        List<List<Integer>> result =new ArrayList<>();

        for(int i=0;i<l1;i++){
            if(i>0&&nums[i]==nums[i-1]){
                continue;
            }

           
            int j=i+1,k=l1-1;
            while(j<k){
                 int temp=nums[i]+nums[j]+nums[k];
                if(temp==0){
                         List<Integer> Tresult =new ArrayList<>();
                        Tresult.add(nums[i]);
                        Tresult.add(nums[j]);
                        Tresult.add(nums[k]);
                        result.add(Tresult);

                    while(j<k&&nums[j]==nums[j+1]){
                    
                            j++;

                        
                    } 
                    while(j<k&&nums[k]==nums[k-1]){
                    
                            k--;

                        
                    } 
                    j++;
                    k--;

//                     while(nums[k]==nums[k-1]&&j<k){
//                         k--;
//                     }
                    // k--;
                    // j++;
            }
                

                else if(temp>0){
                    
                        k--;

                    }
                else {
                    j++;

                }



            }

            
        }
        return result;
        
    }
}