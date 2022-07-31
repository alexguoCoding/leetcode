class Solution {
    
    List<List<Integer>> result =new ArrayList<>();
    List<Integer> path=new ArrayList<>();
    
    public List<List<Integer>> subsets(int[] nums) {
        helper(nums,0);
        result.add(new ArrayList<>(path));
        return result;
        
    }
    public void helper(int[] nums,int start) {
        if(start==nums.length){
            return;
        }
        
        for (int i=start;i<nums.length;i++){
            path.add(nums[i]);
             result.add(new ArrayList<>(path));
             helper( nums,i+1);
             path.remove(path.size()-1);
           
        }
        
    }
}