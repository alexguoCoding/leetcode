class Solution {
    List<List<Integer>> result=new ArrayList<>();
    List<Integer> path=new ArrayList<>();
    public List<List<Integer>> subsetsWithDup(int[] nums) {
 result.add(new ArrayList<>(path));
        Arrays.sort(nums);
        helper(nums,0);

        return result;
    }
    public void helper(int[] nums,int start) {
        if(start==nums.length){
            return;
        }
        Set<Integer> set = new HashSet<>();
        for(int i=start;i<nums.length;i++){
            if(!set.contains(nums[i])){
                path.add(nums[i]);
                set.add(nums[i]);
                result.add(new ArrayList<>(path));
                helper(nums, i+1);
                path.remove(path.size()-1);
            }
            else{
                continue;
            }


            
        }

    }
}