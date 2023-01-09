class Solution {
    public int shortestDistance(int[][] maze, int[] start, int[] destination) {
        int maxnumber=10000;
        LinkedList<int[]> list=new  LinkedList<>();
        int[][] distance=new int[maze.length][maze[0].length];
        for(int i=0;i<maze.length;i++){
            for(int j=0;j<maze[0].length;j++){
                distance[i][j]=maxnumber;
                
            }
        }

        int[][]direction= {{1,0},{0,1},{-1,0},{0,-1}};
        distance[start[0]][start[1]]=0;
        list.add(start);

        while(list.size()!=0){
          
            int[] temp=list.get(0);

            for(int i=0;i<4;i++){
                int tempx=temp[1];
                int tempy=temp[0];
                int sum=distance[tempy][tempx];
                while(test(tempx,tempy,maze)){
                    tempx+=direction[i][1];
                    tempy+=direction[i][0];
                    sum++;
                    

                }
                tempx-=direction[i][1];
                tempy-=direction[i][0];
                sum--;
                if(tempx==destination[1]&&tempy==destination[0]){
                    distance[tempy][tempx]=Math.min(distance[tempy][tempx],sum);
                    
                }
                else{
                    if(distance[tempy][tempx]>sum){
                         int[] add= {tempy,tempx};
                        list.add (add);
                         distance[tempy][tempx]=Math.min(distance[tempy][tempx],sum);
                    }

             
                }
                
            }

            list.removeFirst();
        }
        return distance[destination[0]][destination[1]]==maxnumber?-1:distance[destination[0]][destination[1]];

         
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