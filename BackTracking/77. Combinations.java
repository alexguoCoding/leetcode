class Solution {
    List<List<Integer>> result = new ArrayList<>();
    LinkedList<Integer> path = new LinkedList<>();
    
    public List<List<Integer>> combine(int n, int k) {
        bt(1,n,k);
        // path.add(2);
        // path.add(3);
        //result.add(path);
        return result;
        
        
    }
    public void bt(int start, int n, int k) {
        if(path.size()==k){
            result.add(new ArrayList<>(path));
            return;
        }
        for(int i=start;i<=n;i++){
            path.add(i);
            bt( i+1,  n,  k);
            path.remove(path.size()-1);
            
        }

        
        
    }