class Solution {
    List<List<Integer>> result= new ArrayList<>();
    LinkedList<Integer> path= new LinkedList<>();
    
    public List<List<Integer>> combinationSum3(int k, int n) {
        helper( k,  n,0,1,0);
        return result;
        
    }
    public void helper(int k, int target,int sum,int start,int size) {

        if(sum==target&&size==k){
            if(size==k){
                result.add(new ArrayList<>(path) );
            }
            
            return;
        }


        else if(sum<target){
            for (int i=start;i<10;i++){
                sum+=i;
                size+=1;
                if(sum>target){
                    return;
                }
                path.add(i);
                helper( k, target, sum, i+1,size);
                path.removeLast();
                sum-=i;
                size-=1;
                
                

              }
        }
        
        
        return;
        
    }
}