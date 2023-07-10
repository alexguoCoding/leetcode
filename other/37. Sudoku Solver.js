/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  let matrix = JSON.parse(JSON.stringify(board));
 // matrix[0][0] = 10;

  check = function (row, col, num) {
    for (let i = 0; i < 9; i++) {
      if (matrix[i][col] == num) {
        return false;
      }
    }
    for (let j = 0; j < 9; j++) {
      if (matrix[row][j] == num) {
        return false;
      }
    }
    for (let i = 0; i < 3; i++) {
      let temprow = i;
      if (row >= 3 && row <= 5) {
        temprow = i + 3;
      }
      if (row >= 6 && row <= 8) {
        temprow = i + 6;
      }
      for (let j = 0; j < 3; j++) {
        let tempcol = j;
        if (col >= 3 && col <= 5) {
          tempcol = j + 3;
        }
        if (col >= 6 && col <= 8) {
          tempcol = j + 6;
        }

        if (matrix[temprow][tempcol] == num) {
          return false;
        }
      }
    }
    return true;
  };
  checkfinal = function () {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (matrix[i][j] == ".") {
          return false;
        }
      }
    }

    return true;
  };
  dfs = function () {
    if (checkfinal()) {
     // board = JSON.parse(JSON.stringify(matrix));
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            board[i][j]=matrix[i][j]
        }
      }
      //console.log(board)
      return;
    }

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (matrix[i][j] != ".") {
          continue;
        }
        for (let num = 1; num <= 9; num++) {
          // console.log(check(i, j, num))
          if (check(i, j, num)) {
            matrix[i][j] = num + "";
            //console.log(matrix[0])

            dfs();

            matrix[i][j] = ".";
          }
        }
        return;
      }
    }
  };
  dfs();
  return;
};
