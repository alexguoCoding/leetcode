class Solution {
    private void dfs(int start, int[] visit,ArrayList<Integer>[] lists){
      visit[start]=1;
      for(int i=0;i<lists[start].size();i++){
        if(visit[lists[start].get(i)]==0){
          dfs(lists[start].get(i),visit,lists);
        }
      }
      
      
    }
      public int countComponents(int n, int[][] edges) {
        int[] visit=new int[n];
        ArrayList<Integer>[] lists=new ArrayList[n];
        for (int i = 0; i < n; i++) {
              lists[i] = new ArrayList<Integer>();
        }
          
        for(int i=0;i<edges.length;i++){
          lists[edges[i][0]].add(edges[i][1]);
          lists[edges[i][1]].add(edges[i][0]);
        }
        int result=0;
        for(int i=0;i<n;i++){
          if(visit[i]==0){
            result++;
             dfs(i,visit,lists);
          }
         
        }
        
  
          return result;
      }
  }