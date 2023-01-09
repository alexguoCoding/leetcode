class Solution {
    int[][] visited;
    int[][] dir={{0,1},{0,-1},{1,0},{-1,0}};

    public boolean hasPath(int[][] maze, int[] start, int[] destination) {
        visited=new int[maze.length][maze[0].length];
       return rolling(start,destination,maze);

        
    }
    public boolean rolling(int[] start,int[] destination,int[][] maze) {
        LinkedList<int[]> list=new LinkedList<>();
        list.add(start);

        while(list.size()!=0){
            int[] temp=list.get(0);

                for(int i=0;i<4;i++){
                    int tempx=temp[1];
                    int tempy=temp[0]; 
                    while(test(tempx,tempy,maze)){
                        tempx+=dir[i][1];
                        tempy+=dir[i][0];
                    }
                    int resultx=tempx-dir[i][1];
                    int resulty=tempy-dir[i][0];

                    if((resultx)==destination[1]&&(resulty)==destination[0]){
                        return true;
                    }
                    else{
                          if( visited[resulty][resultx]==0){
                                int[] add={resulty,resultx};
                                list.add(add);
                                visited[resulty][resultx]=1;
                          }
                    }



                 
                
            }
           
            
            

            list.removeFirst();
        }
        return false;

        
        
    }
     public boolean test(int x,int y,int[][] maze) {
         if(y<0||x<0||y>=maze.length||x>=maze[0].length||maze[y][x]==1){
             return false;
         }
         else{
             return true;
         }
         
     }
}