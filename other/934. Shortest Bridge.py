class Solution:
    def shortestBridge(self, grid: List[List[int]]) -> int:
        y=len(grid)
        x=len(grid[0])
        check=False
        save1=[]
        for i in range(y):
            for j in range(x):
                if grid[i][j]==1:
             
               
                    self.dfs1(i,j,grid,save1)
                    check=True
                    break
            if check==True:
                break
        
        check=False

 

        return self.bfs1(i,j,grid,save1)

        
    def dfs1(self,posy,posx,grid,save1):
        dir=[[1,0],[-1,0],[0,1],[0,-1]]
        y=len(grid)
        x=len(grid[0])
 
        if grid[posy][posx]!=1:
            return

        if grid[posy][posx]==1:
            save1.append([posy,posx])
            grid[posy][posx]=2
   
            for d in dir:
                dx=posx+d[0]
                dy=posy+d[1]
                if dx>=0 and dx<x and dy>=0 and dy<y:
               
                    self.dfs1(dy,dx,grid,save1)

  
  
  
    def bfs1(self,posy,pox,grid,save1):
        dir=[[1,0],[-1,0],[0,1],[0,-1]]
        y=len(grid)
        x=len(grid[0])

        count=0
        check=False
        print(count)


        while len(save1)!=0:
            
            templ=len(save1)
            #print(count)
            for i in range(len(save1)):
                temppos=save1.pop(0)
                for d in dir:
                    dy=temppos[0]+d[0]
                    dx=temppos[1]+d[1]
                    if dx>=0 and dx<x and dy>=0 and dy<y:
                        if grid[dy][dx]==0:
                            grid[dy][dx]=-1       
                            save1.append([dy,dx])
                        elif grid[dy][dx]==1:
                            check=True
                            break
                if check==True:
                    break
            if check==True:
                break
            count+=1
                           
                            
                    
        return count
