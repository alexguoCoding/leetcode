class Solution {
    public int longestConsecutive(int[] nums) {
                if (nums.length==0){
                       return 0;
                }
        Set<Integer> set = new HashSet<>();
         for (int i = 0; i < nums.length; i++) { 
               set.add(nums[i]);
        }
        int current=0;
        int max=0;

        for (int num : set) {
            current=1;
            if(!set.contains(num-1)){
                current=1;
                int currentnum=num;
                while(set.contains(currentnum+1)){
                    currentnum++;
                    current++;
                }
                max=Math.max(max,current);
            }


            max=Math.max(max,current);
            
        }
        return max;
    }
}