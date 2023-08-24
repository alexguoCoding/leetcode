/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
    let Y = grid.length;
    let X = grid[0].length;
  let count=0
    for (let i = 0; i < Y - 2; i++) {
      for (let j = 0; j < X - 2; j++) {
        if ((
          grid[i][j] + grid[i + 1][j] + grid[i + 2][j] ==
            grid[i][j + 1] + grid[i + 1][j + 1] + grid[i + 2][j + 1] &&
          grid[i][j] + grid[i + 1][j] + grid[i + 2][j] ==
            grid[i][j + 2] + grid[i + 1][j + 2] + grid[i + 2][j + 2]) &&(
          grid[i][j] + grid[i][j + 1] + grid[i][j + 2] ==
            grid[i + 1][j] + grid[i + 1][j + 1] + grid[i + 1][j + 2] &&
          grid[i][j] + grid[i][j + 1] + grid[i][j + 2] ==
            grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2])&&(grid[i][j]+grid[i+1][j+1]+grid[i+2][j+2]==grid[i][j+2]+grid[i+1][j+1]+grid[i+2][j])&&(grid[i][j]+grid[i+1][j+1]+grid[i+2][j+2]==grid[i][j] + grid[i + 1][j] + grid[i + 2][j])&&(  grid[i][j] + grid[i][j + 1] + grid[i][j + 2])
        ) {
          let set=new Set()
          for(let k=0;k<3;k++){
            for(let l=0;l<3;l++){
              set.add(grid[i+k][j+l])
            }
          }
          let correct=true
          for(let n=1;n<=9;n++){
            if(!set.has(n)){
              correct=false
            }
  
          }
          if(correct){
            count++;
  
          }
  
           
  
        }
      }
    }
    return count;
  };
  