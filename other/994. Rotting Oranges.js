/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let height = grid.length;
  let width = grid[0].length;

  let track = new Array(height).fill(0).map(() => new Array(width).fill(0));
  //console.log(track)
  let rotton = [];
  //0 not reach 1 reach

  // console.log(track)
  //    console.log(width)
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      track[i][j] = grid[i][j];
      if (grid[i][j] == 2) {
        rotton.push([i, j]);
        track[i][j] = 1;
        //console.log([i,j])
      } else if (grid[i][j] == 0) {
        track[i][j] = 1;
      } else if (grid[i][j] == 1) {
        track[i][j] = 0;
      }
    }
  }

  let dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let result = 0;

  while (rotton.length != 0) {
    let temprotton = [];
    result++;

    while (rotton.length != 0) {
      temprotton.push(rotton.shift());
    }

    while (temprotton.length != 0) {
      let [i, j] = temprotton.pop();

      for (let d of dir) {
        let di = i + d[0];
        let dj = j + d[1];
        if (di >= 0 && di < grid.length && dj >= 0 && dj < grid[0].length) {
          if (track[di][dj] == 0) {
            track[di][dj] = 1;
            rotton.push([di, dj]);
          }
        }
      }
    }

    //result++;
    console.log(rotton);
    if (rotton.length == 0) {
      result--;
    }
    console.log(result);
  }
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (track[i][j] == 0) {
        return -1;
      }
    }
  }

  return result;
};
