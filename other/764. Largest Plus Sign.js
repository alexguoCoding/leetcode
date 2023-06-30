/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (n, mines) {
  let grid = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(4).fill(0)));
  let copy = new Array(n).fill(1).map(() => new Array(n).fill(1));
  for (let k = 0; k < mines.length; k++) {
    copy[mines[k][0]][mines[k][1]] = 0;
  }

 // console.log(copy);

  //left
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (copy[i][j] == 0) {
        count = 0;
         grid[i][j][0] = count;
      }
      else{
          count++;

        grid[i][j][0] = count;
      }

     
    }
  }
 // console.log(grid)
  // console.log(grid)
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = n-1; j >= 0; j--) {
      if (copy[i][j] == 0) {
        count = 0;
         grid[i][j][1] = count;
      }
      else{
          count++;

        grid[i][j][1] = count;
      }

     
    }
  }
  //console.log(grid)
  for (let j = 0; j < n; j++) {
    let count = 0;
    for (let i = 0; i < n; i++) {
      if (copy[i][j] == 0) {
        count = 0;
         grid[i][j][2] = count;
      }
      else{
          count++;

        grid[i][j][2] = count;
      }

     
    }
  }
  for (let j = 0; j < n; j++) {
    let count = 0;
    for (let i = n-1; i >=0; i--) {
      if (copy[i][j] == 0) {
        count = 0;
         grid[i][j][3] = count;
      }
      else{
          count++;

        grid[i][j][3] = count;
      }

     
    }
  }
 //console.log(grid)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (copy[i][j] == 1) {
        let count = 1;
        //console.log([i,j]);
        for (let k = i + 1; k < n; k++) {
          if (copy[k][j] == 1) {
            count++;
          } else {
            grid[i][j][3] = count;
            break;
          }
          //   console.log([i,k]);
          //    console.log(count);
        }
        grid[i][j][3] = count;
      }
    }
  }
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let tempresult = Math.min(
        grid[i][j][0],
        Math.min(grid[i][j][1], Math.min(grid[i][j][2], grid[i][j][3]))
      );
      result = Math.max(tempresult, result);
    }
  }
 // console.log(grid)
 return result;
};