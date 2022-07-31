class Solution {
    List<List<Integer>> out= new ArrayList<>();
    LinkedList<Integer> path= new LinkedList<>();
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        Arrays.sort(candidates);
        helper( candidates,  target,0,0);
        return out;
        
    }
    public void helper(int[] candidates, int target,int sum,int start) {
        if(sum==target){
            out.add(new ArrayList(path));
            return; 
        }

        else if(sum<target){
            Set<Integer> set = new HashSet<>();

            
            
            for (int i=start;i<candidates.length;i++){
                
                if(sum+candidates[i]>target){
                    break;
                }

                if(!set.contains(candidates[i])){
                    set.add(candidates[i]);
                    sum+=candidates[i];
                    path.add(candidates[i]);

                    helper( candidates,target, sum,i+1);
                    sum-=candidates[i];
                    path.removeLast();
                }


                
            }


        }
        
        
        
    }
}