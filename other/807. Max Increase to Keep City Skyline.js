/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let l=grid.length
    let sorth=new Array(l).fill(-1)
    let west=new Array(l).fill(-1)
    for(let i=0;i<l;i++){
        let max=-1;
        for(let j=0;j<l;j++){
max=Math.max(grid[i][j],max)
        }
        west[i]=max
    }
    for(let i=0;i<l;i++){
        let max=-1;
        for(let j=0;j<l;j++){
max=Math.max(grid[j][i],max)
        }
        sorth[i]=max
    }
    let count=0
    for(let i=0;i<l;i++){

        for(let j=0;j<l;j++){
            count=count+Math.min(sorth[j],west[i])-grid[i][j]

        }
      
    }


    return count
    
};