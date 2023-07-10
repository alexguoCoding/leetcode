/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
  let start = new Array(2).fill(0);
  let pathnum = 0;
  let num0 = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        start[0] = i;
        start[1] = j;
      }
      if (grid[i][j] == 0) {
        num0++;
      }
    }
  }

  let dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let dfs = function (y, x, n) {
      
    for (let d of dir) {
      let newy = y + d[0];
      let newx = x + d[1];
      if (
        newy >= 0 &&
        newx >= 0 &&
        newy < grid.length &&
        newx < grid[0].length
      ) {
        if (grid[newy][newx] == 0) {
          grid[newy][newx] = -1;
          n--;
          // console.log(n)
          dfs(newy, newx,n);
          grid[newy][newx] = 0;
          n++;
        } else if (grid[newy][newx] == 2) {
          if (n == 0) {
            pathnum++;
           
            return;
          }
        } else if (grid[newy][newx] == -1) {
          continue;
        }
      }

      //grid[newy][newx] = 0;
    }
    return;
  };

  dfs(start[0], start[1], num0);

  return pathnum;
};