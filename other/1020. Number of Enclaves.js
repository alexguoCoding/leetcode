/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    let height=grid.length
    let width=grid[0].length
    let dir=[[0,1],[1,0],[0,-1],[-1,0]]
    let getn=false
      let result=0
    let dfs=function(x,y){
        if(x<0||x>=height||y<0||y>=width){
            return
        }
        //  console.log(x+' '+y)
        //   console.log(grid[x][y])
        if(grid[x][y]==0){
            return
        }
        if(grid[x][y]==1){
            if(getn){
                result++;

            }
            grid[x][y]=0

        }
        for(let d of dir){
            dfs(x+d[0],y+d[1])
        }
        


    }
    for(let j=0;j<width;j++){
        if(grid[0][j]==1){
            dfs(0,j)

        }
        if(grid[height-1][j]==1){
            dfs(height-1,j)

        }

    }
   // console.log('a')
    for(let i=0;i<height;i++){
        if(grid[i][0]==1){
            dfs(i,0)

        }
            
        if(grid[i][width-1]==1){
            dfs(i,width-1)

        }

    }

  
    getn=true
   for(let i=0;i<height;i++){
       for(let j=0;j<width;j++){
           if(grid[i][j]==1){
               dfs(i,j)
              

           }
       }

   }
   return result


    
};