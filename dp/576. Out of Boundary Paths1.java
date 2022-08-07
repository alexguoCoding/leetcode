class Solution {
    int [][]grid;
    int [][]direct={{-1,0},{1,0},{0,1},{0,-1}};
    public int findPaths(int m, int n, int maxMove, int startRow, int startColumn) {
            grid=new int[m][n];
        return  dfs( m,  n,  maxMove,  startRow,  startColumn);
        
    }
    public int dfs(int m, int n, int maxMove, int startRow, int startColumn) {
        int sum=0;
        if(startRow==-1){
            return 1;
        }
        if(startRow==m){
            return 1;
        }
        if(startColumn==-1){
            return 1;
        }
        if(startColumn==n){
            return 1;
        }
        if(maxMove==0){
            return 0;
        }
        for(int i=0;i<4;i++){
            sum+=dfs(m,n,maxMove-1,startRow+direct[i][0],startColumn+direct[i][1]);
        }



        return  sum;
        
    }
    
}