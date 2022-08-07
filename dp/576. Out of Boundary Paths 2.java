class Solution {
    int [][]grid;
    int [][]direct={{-1,0},{1,0},{0,1},{0,-1}};
    int [][][]save;
    int MOD = 1000000007;
    
    public int findPaths(int m, int n, int maxMove, int startRow, int startColumn) {
            grid=new int[m][n];
            int [][][]save=new int[m][n][maxMove+1];
            for(int i=0;i<m;i++){
                for(int j=0;j<n;j++){
                    for (int k=0;k<=maxMove;k++){
                        save[i][j][k]=-1;
                        
                    }
                    
                }
                
            }
        return  dfs( m,  n,  maxMove,  startRow,  startColumn,save);
        
    }
    public int dfs(int m, int n, int maxMove, int startRow, int startColumn,int [][][]save) {
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
        // save[1][1][1]=-1;
        if(save[startRow][startColumn][maxMove]!=-1){
            return save[startRow][startColumn][maxMove];
                
        }
        for(int i=0;i<4;i++){
            sum=(sum+dfs(m,n,maxMove-1,startRow+direct[i][0],startColumn+direct[i][1],save))%MOD;
        }
        save[startRow][startColumn][maxMove]=sum;



        return  sum;
        
    }
    
}