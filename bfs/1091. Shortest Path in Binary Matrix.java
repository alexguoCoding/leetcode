class Solution {
    public int shortestPathBinaryMatrix(int[][] grid) {
        int length=grid.length;
        int[][]distance=new int[length][length];
        for(int i=0;i<length;i++){
             for(int j=0;j<length;j++){
                 distance[i][j]=1000;
             }
        }
        LinkedList<int[]> list=new LinkedList<>();
       
         distance[0][0]=1;
        if(grid[0][0]==1){
            return -1;
        }
          int add[]={0,0};
         list.add(add);
        int[][] dir={{1,0},{-1,0},{0,1},{0,-1},{1,1},{-1,-1},{1,-1},{-1,1}};
        while(list.size()>0){
            int[] temp=list.get(0);

            for(int i=0;i<8;i++){
            int x=temp[1];
             int y=temp[0];
                x+=dir[i][1];
                y+=dir[i][0];
                if(x>=0&&y>=0&&x<length&&y<length&&grid[y][x]==0){
                    // System.out.print(y);
                    //   System.out.println(x);
                    
                    if(distance[y-dir[i][0]][x-dir[i][1]]+1<distance[y][x]){
                        distance[y][x]=distance[y-dir[i][0]][x-dir[i][1]]+1;
                        int[] tempadd= {y,x};
                        list.add(tempadd);
                    }
                }
            }
//             while(x>=0||y>=0||x<length||y<=length){
                
                
//             }
            
            list.removeFirst();
            
        }
        return distance[length-1][length-1]==1000?-1:distance[length-1][length-1];
        
        
    }

}