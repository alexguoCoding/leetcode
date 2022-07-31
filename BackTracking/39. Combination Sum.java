class Solution {
    List<List<Integer>> result= new ArrayList<>();
     List<Integer> path= new ArrayList<>();
    LinkedList<Integer> path1= new LinkedList<>();
    
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
          Arrays.sort(candidates);
        
        bf(candidates,target,0,0);
        return result;
    }
    public void bf(int[] candidates, int target,int sum,int start) {

 
        if (sum==target){
            result.add(new ArrayList<>(path1));
            
        }
        else if (sum<target){
            for(int i=start;i<candidates.length;i++){
                
                if(sum+candidates[i]>target){
                    return;
                }
                sum+=candidates[i];
                path.add(candidates[i]);
                path1.add(candidates[i]);

                bf(candidates, target,sum,i);
                path.remove(path.size()-1);
                 path1.remove(path1.size()-1);
                  sum-=candidates[i];
                
            }

        }
        
    }
}