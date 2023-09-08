class Solution:
    def hasValidPath(self, grid: List[List[str]]) -> bool:
        result=[False]
        lenHeight=len(grid)
        lenWidth=len(grid[0])
        @cache
        def dfs(y,x,balance):
            lenHeight=len(grid)
            lenWidth=len(grid[0])

        
            if y==len(grid):
                return 
            if x==len(grid[0]):
                return 
            if grid[y][x]=="(":
                balance+=1
            else:
                balance-=1
            if balance>lenHeight+lenWidth-y-x:
                return
            if y==len(grid)-1 and x==len(grid[0])-1:
                if balance==0:
                    result[0]=True
            if balance<0:
                return
            dfs( y+1,x,balance)
            dfs( y,x+1,balance)
     
    
        dfs(0,0,0)
        return result[0]
    

            




        