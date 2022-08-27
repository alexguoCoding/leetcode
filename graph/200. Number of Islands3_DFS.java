class Solution {
    List<List<Character>> list=new ArrayList<>();
    int num=0;
    
    
        int length;
        int height;
    
    public int numIslands(char[][] grid) {
         height=grid.length;
         length=grid[0].length;
        for (int i=0;i<height;i++){
            for(int j=0;j<length;j++){
                if(grid[i][j]=='1'){
                    num++;
                      // System.out.println("i；"+i+"j:"+j);
                    dfs(grid,i,j);
                    
                }
                
                
            }
        }
        return num;
        
    }
    public void dfs(char[][] grid,int i,int j) {
        grid[i][j]='0';
        // System.out.println("i；"+i+"j:"+j);
        // System.out.println("i；"+i+"j:"+j);
        if(i+1<height&&grid[i+1][j]=='1'){
            dfs(grid,i+1,j);
            
        }
        if(i-1>=0&&grid[i-1][j]=='1'){
            dfs(grid,i-1,j);
            
        }
        if(j+1<length&&grid[i][j+1]=='1'){
             //System.out.println("i:"+i+"j:"+j);
            dfs(grid,i,j+1);
           
            
        }
        if(j-1>=0&&grid[i][j-1]=='1'){
            dfs(grid,i,j-1);
            
        }
        

        
    }
    
}