class Solution {
    List<List<Integer>> result =new ArrayList<>();
    List<Integer> path=new ArrayList<>();

    boolean[] exist;

    public List<List<Integer>> permuteUnique(int[] nums) {

        exist = new boolean[nums.length];
        for(int i=0;i<nums.length;i++){
            exist[i]=false;
        }
        Arrays.sort(nums);
        helper(nums,0);
        return result;
    }
    public void helper(int[] nums,int times){
        if(times==nums.length){
            result.add(new ArrayList<>(path));

            return;
        }

        Set<Integer> set = new HashSet<>();
        for(int i=0;i<nums.length;i++){
            if(!set.contains(nums[i])){

                if(!exist[i]){
                    set.add(nums[i]);
                    path.add(nums[i]);
                    exist[i]=true;

                    helper(nums,times+1);
                    path.remove(path.size()-1);
                    exist[i]=false;
                }
            }
            else {
                continue;
            }
        }
    }
}