/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
    let dir=[[0,1],[0,-1],[1,0],[-1,0]]
    let width=grid2[0].length
    let height=grid2.length
    let check=1
    let result=0
    dfs=function(y,x){
        if(y<0||y>=height||x<0||x>=width){
            return 

        }
        if(grid2[y][x]==0){
            return 
        }
        if(grid2[y][x]==1){
            if(grid1[y][x]==0){
                check=0
            }
            grid2[y][x]=0
            
            
        }
       // console.log(y+' '+x)
        for(let d of dir){
            dfs(y+d[0],x+d[1])
        }

    }
    for(let i=0;i<height;i++){
        for(let j=0;j<width;j++){
            if(grid2[i][j]==1){
                dfs(i,j)
                result+=check
                check=1
            }

        }
    }

    return result
};