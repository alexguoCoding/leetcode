class Solution {
    List<List<Integer>> result=new ArrayList<>();
    List<Integer> path=new ArrayList<>();
    public List<List<Integer>> allPathsSourceTarget(int[][] graph) {
        path.add(0);
        dfs(graph,0);
        return result;
    
        
    }
    public void dfs(int[][] graph,int x) {
        if(x==graph.length-1){

            result.add(new ArrayList<>(path));

            return;
            
        }
        for(int i=0;i<graph[x].length;i++){
            path.add(graph[x][i]);
            //System.out.println(graph[x][i]);
            dfs(graph,graph[x][i]);
             path.remove(path.size()-1);


            

        }
        return;
    }
       
        
       
}