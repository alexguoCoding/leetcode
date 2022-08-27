class Solution {
    int n;
    boolean[] visit;
    public int findCircleNum(int[][] isConnected) {
         n=isConnected.length;
       visit= new boolean[n];
             int sum=0;
        Arrays.fill(visit,false);
        for(int i=0;i<n;i++){
            // for(int j=0;j<n;j++){
                if(visit[i]==false){
                    sum++;
                    dfs(isConnected,i);
                }
            // }
            
        }
        
        return sum;
        
    }
    void dfs(int[][] isConnected,int i){
        visit[i]=true;
        for(int j=0;j<n;j++){
            if(isConnected[i][j]==1){
                if(visit[j]==false){
                    dfs (isConnected,j);
                }

                
            }
          
        }
        
    }
}