class Solution {
    List<List<Integer>> result =new ArrayList<>();
    List<Integer> path=new ArrayList<>();
    Set<Integer> set = new HashSet<>();
    public List<List<Integer>> permute(int[] nums) {
        helper(nums,set,0);
        return result;
        
    }
    public void helper(int[] nums,Set<Integer> set,int times) {
        if(times==nums.length){
            result.add(new ArrayList<>(path));
            return;
        }
        for (int i=0;i<nums.length;i++){
            if(!set.contains(nums[i])){
                path.add(nums[i]);
                set.add(nums[i]);
                helper(nums,set,times+1);
                path.remove(path.size()-1); 
                set.remove(nums[i]);
            }
            else{
                continue;
            }

            
        }

    }
}