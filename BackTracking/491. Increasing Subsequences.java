class Solution {
    List<List<Integer>>  result=new ArrayList<>();
    List<Integer>  path=new ArrayList<>();
    public List<List<Integer>> findSubsequences(int[] nums) {
        helper(nums,0);
        return result;
    }
    public void helper(int[] nums,int start) {
                if(start==nums.length){
                    //System.out.println("wde");
                     //result.add(new ArrayList<>(path));
                    return;
                }
        
        Set<Integer> set = new HashSet<>();
        for(int i=start;i<nums.length;i++){
            // System.out.println("wde");

            if( !set.contains(nums[i])){
                if(path.size()==0){
                        path.add(nums[i]);
                        helper(nums,i+1);
                        path.remove(path.size()-1);
                        set.add(nums[i]);

                }
                else {
                    
                        if(nums[i]>=path.get(path.size()-1)){
                            path.add(nums[i]);
                            result.add(new ArrayList<>(path));
                            helper(nums,i+1);
                             path.remove(path.size()-1);
                            set.add(nums[i]);
                        }
                        else{
                            continue;
                         }
                }

                
                
            }

                
        }

    }
    
 }
    