/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let row=grid.length;
    let col=grid[0].length;
    let result=0;

    for(let j=0;j<row;j++){
         for(let i=0;i<col;i++){
             if(grid[j][i]==1){
                 if(i==0){
                     result++;
                 }
                 if(i==col-1){
                     result++;
                 }
                 if(j==0){
                     result++;
                 }
                 if(j==row-1){
                     result++;
                 }
                 if(i>=1&&grid[j][i-1]==0){
                     result++;
                 }
                 if(i<=col-2&&grid[j][i+1]==0){
                     result++;
                 }
                 if(j>=1&&grid[j-1][i]==0){
                     result++;
                 }
                 if(j<=row-2&&grid[j+1][i]==0){
                     result++;
                 }

             }
         }
    }
    return result;
};